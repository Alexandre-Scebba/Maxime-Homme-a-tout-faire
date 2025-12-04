"use client";

import { useTranslation } from "../TranslationProvider";

type Product = {
  id: string;
  img: string;
  titleKey: string;
  descKey: string;
  fallbackTitle: string;
  fallbackDesc: string;
};

const products: Product[] = [
  {
    id: "lifemaster_hero",
    img: "/Products/DLX_LifemasterInt_01_LowSheenEggshell_FR_HERO_1.png",
    titleKey: "product_lifemaster_title",
    descKey: "product_lifemaster_desc",
    fallbackTitle: "Dulux Lifemaster Interior Low-Sheen",
    fallbackDesc:
      "Low-odour, low-VOC interior paint; Ideal for lived-in spaces; Washable, smooth finish; Designed for healthier indoor air quality",
  },
  {
    id: "lifemaster_trim",
    img: "/Products/Lifemaster-doors-and-trim.png",
    titleKey: "product_lifemaster_trim_title",
    descKey: "product_lifemaster_trim_desc",
    fallbackTitle: "Dulux Lifemaster Interior Doors & Trim",
    fallbackDesc:
      "Semi-gloss, durable finish for doors and trim; Excellent adhesion and leveling; Easy to clean and resistant to everyday wear; Provides a smooth, professional-looking surface",
  },
  {
    id: "distinction",
    img: "/Products/distinction-paint.png",
    titleKey: "product_distinction_title",
    descKey: "product_distinction_desc",
    fallbackTitle: "Distinction Exterior Paint",
    fallbackDesc:
      "Engineered for exterior durability; Maintains colour and sheen over time; Resists harsh weather; Strong protective coating",
  },
  {
    id: "kitchen_bath_dulux",
    img: "/Products/Dulux-kitchen-and-bath-fr.png",
    titleKey: "product_kitchen_bath_title",
    descKey: "product_kitchen_bath_desc",
    fallbackTitle: "Dulux Kitchen & Bath",
    fallbackDesc:
      "Formulated for moisture-heavy rooms; Durable, washable finish; Handles steam and frequent cleaning; Ideal for kitchens and bathrooms",
  },
  {
    id: "dul7700",
    img: "/Products/DUL7700-1GL-Z.jpg",
    titleKey: "product_dul7700_title",
    descKey: "product_dul7700_desc",
    fallbackTitle: "Dulux Ultra White Interior (DUL7700)",
    fallbackDesc:
      "Ultra-white finish for ceilings and walls; Bright, clean coverage; Consistent application; Pairs well with most interior colour schemes",
  },
  {
    id: "xpert_primer",
    img: "/Products/DULUX-XPERT-WATERBORNE-primersealer-FR.png",
    titleKey: "product_xpert_primer_title",
    descKey: "product_xpert_primer_desc",
    fallbackTitle: "Dulux X-PERT Waterborne Primer/Sealer",
    fallbackDesc:
      "High-adhesion primer for smooth topcoat application; Improves coverage and hide; Seals repairs and patched areas; Ensures a long-lasting finish",
  },
  {
    id: "cover_stain",
    img: "/Products/cover-stain-paint.png",
    titleKey: "product_cover_stain_title",
    descKey: "product_cover_stain_desc",
    fallbackTitle: "Cover-Stain Stain-Blocking Primer",
    fallbackDesc:
      "Seals water stains and smoke damage; High hiding power; Excellent adhesion; Ideal for repainting problem areas",
  },
  {
    id: "mold_stop",
    img: "/Products/mold-stop-paint.png",
    titleKey: "product_mold_stop_title",
    descKey: "product_mold_stop_desc",
    fallbackTitle: "Mold-Resistant Primer",
    fallbackDesc:
      "Resists mold and mildew; Ideal for humid or problem areas; Helps maintain a clean, healthy surface; Enhances durability of the topcoat",
  },
  {
    id: "metal_paint",
    img: "/Products/metal-paint.png",
    titleKey: "product_metal_paint_title",
    descKey: "product_metal_paint_desc",
    fallbackTitle: "Direct-to-Metal Protective Paint",
    fallbackDesc:
      "Bonds directly to metal; Resists rust and corrosion; Durable outdoor performance; Ideal for railings, doors, and metal structures",
  },
  {
    id: "alex_caulk",
    img: "/Products/alex-caulk.png",
    titleKey: "product_alex_caulk_title",
    descKey: "product_alex_caulk_desc",
    fallbackTitle: "Alex Flex / Painters Caulk",
    fallbackDesc:
      "Flexible, paintable sealant; Ideal for trim, windows, and doors; Fills gaps and cracks before painting; Ensures a cleaner, more professional finish",
  },
  {
  id: "gauging_plaster",
  img: "/Products/plaster-bag.png",
  titleKey: "product_gauging_plaster_title",
  descKey: "product_gauging_plaster_desc",
  fallbackTitle: "Gauging Plaster",
  fallbackDesc:
    "High-strength plaster for building up surfaces; Ideal for leveling deep repairs; Creates a solid base before final skim coats",
},
{
  id: "spackle",
  img: "/Products/plaster-bucket.png",
  titleKey: "product_spackle_title",
  descKey: "product_spackle_desc",
  fallbackTitle: "Lightweight All-Purpose Spackle",
  fallbackDesc:
    "Ready-mixed filler for small repairs; Great for nail holes, dents and minor cracks; Sands easily for a smooth, paint-ready finish",
},
{
  id: "joint_tape",
  img: "/Products/tape.png",
  titleKey: "product_joint_tape_title",
  descKey: "product_joint_tape_desc",
  fallbackTitle: "Drywall Joint Tape",
  fallbackDesc:
    "Used for reinforcing drywall seams; Prevents cracking along joints; Creates a strong base before applying joint compound",
},


];

export default function Products() {
  const { t } = useTranslation();

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-b from-white to-sky-50 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center shine-blue mx-auto w-fit">
          {t("products_title") || "Products We Use"}
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          {t("products_intro") ||
            "We work with professional-grade Dulux products chosen for durability, clean finishes, and reliable performance for your homes."}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p) => {
            const title = t(p.titleKey) || p.fallbackTitle;
            const desc = t(p.descKey) || p.fallbackDesc;
            const parts = desc
              .split(";")
              .map((s) => s.trim())
              .filter(Boolean);
            const hasBullets = parts.length > 1;

            return (
              <article
                key={p.id}
                className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-6 bg-sky-50 rounded-xl shadow-lg p-4 md:p-6"
              >
                {/* Text block */}
                <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                  </h3>

                  {hasBullets ? (
                    <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base mb-3 text-left">
                      {parts.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 text-sm sm:text-base mb-3">
                      {desc}
                    </p>
                  )}

                  <p className="text-xs uppercase tracking-wide text-sky-700 font-semibold">
                    {t("products_pro_note") ||
                      "Professional-grade product for long-lasting results"}
                  </p>
                </div>

           {/* Image block */}
              <div className="w-full md:w-auto flex justify-center md:justify-end items-center">
                <div className="bg-white rounded-xl shadow-md p-3 max-w-[220px] w-full">
                  <img
                    src={p.img}
                    alt={title}
                    className="w-full h-40 object-contain"
                    draggable={false}
                  />
                </div>
              </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
