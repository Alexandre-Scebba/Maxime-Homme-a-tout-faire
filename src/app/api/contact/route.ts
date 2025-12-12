import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user_name = String(body.user_name || "").trim();
    const user_email = String(body.user_email || "").trim();
    const user_phone = String(body.user_phone || "").trim();
    const message = String(body.message || "").trim();
    const square_footage = String(body.square_footage || "").trim();
    const num_rooms = String(body.num_rooms || "").trim();
    const major_wall_repair = String(body.major_wall_repair || "").trim();
    const site_lang = String(body.site_lang || "").trim();

    if (!user_name || !user_email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_PORT || "465") === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.EMAIL_TO;
    const from = process.env.EMAIL_FROM || process.env.SMTP_USER;

    if (!to || !from) {
      return NextResponse.json({ ok: false, error: "Email env not configured" }, { status: 500 });
    }

    const subject = `New Quote Request (${site_lang || "en"}) - ${user_name}`;

    const text =
`Name: ${user_name}
Email: ${user_email}
Phone: ${user_phone || "-"}
Language: ${site_lang || "-"}
Square Footage: ${square_footage || "-"}
# Rooms: ${num_rooms || "-"}
Major Wall Repair: ${major_wall_repair || "-"}

Message:
${message}
`;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      replyTo: user_email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
