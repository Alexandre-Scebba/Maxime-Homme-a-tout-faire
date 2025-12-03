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
    fallbackTitle: "Dulux Lifemaster Interior",
    fallbackDesc:
      "Low-odour, low-VOC interior paint for living spaces where a smooth, washable finish and air quality matter.",
  },
  // {
  //   id: "lifemaster_can",
  //   img: "/Products/lifemaster-paint.png",
  //   titleKey: "product_lifemaster_can_title",
  //   descKey: "product_lifemaster_can_desc",
  //   fallbackTitle: "Lifemaster Interior Eggshell",
  //   fallbackDesc:
  //     "Everyday interior finish with a soft sheen that hides small surface defects and is easy to touch up.",
  // },
  {
    id: "dul7700",
    img: "/Products/DUL7700-1GL-Z.jpg",
    titleKey: "product_dul7700_title",
    descKey: "product_dul7700_desc",
    fallbackTitle: "Dulux Ultra White (DUL7700)",
    fallbackDesc:
      "A clean, bright white used for ceilings and walls to make spaces feel fresh and open.",
  },
  // {
  //   id: "kitchen_bath",
  //   img: "/Products/bathroom-paint.png",
  //   titleKey: "product_bathroom_paint_title",
  //   descKey: "product_bathroom_paint_desc",
  //   fallbackTitle: "Bathroom & Moisture-Resistant Paint",
  //   fallbackDesc:
  //     "Specialized coating designed for humid rooms like bathrooms, helping resist moisture and mildew.",
  // },
  {
    id: "kitchen_bath_dulux",
    img: "/Products/Dulux-kitchen-and-bath-fr.png",
    titleKey: "product_kitchen_bath_title",
    descKey: "product_kitchen_bath_desc",
    fallbackTitle: "Dulux Kitchen & Bath",
    fallbackDesc:
      "Durable, washable finish formulated for kitchens and bathrooms where steam and splashes are common.",
  },
  {
    id: "xpert_primer",
    img: "/Products/DULUX-XPERT-WATERBORNE-primersealer-FR.png",
    titleKey: "product_xpert_primer_title",
    descKey: "product_xpert_primer_desc",
    fallbackTitle: "Dulux X-PERT Waterborne Primer/Sealer",
    fallbackDesc:
      "High-adhesion primer that helps hide repairs and gives the finish coat a more even, long-lasting base.",
  },
  {
    id: "cover_stain",
    img: "/Products/cover-stain-paint.png",
    titleKey: "product_cover_stain_title",
    descKey: "product_cover_stain_desc",
    fallbackTitle: "Stain-Blocking Primer",
    fallbackDesc:
      "Primer used to block water marks, nicotine, and other stubborn stains before painting.",
  },
  {
    id: "mold_stop",
    img: "/Products/mold-stop-paint.png",
    titleKey: "product_mold_stop_title",
    descKey: "product_mold_stop_desc",
    fallbackTitle: "Mold-Resistant Primer",
    fallbackDesc:
      "Helps inhibit mold and mildew growth on properly prepared surfaces in problem areas.",
  },
  // {
  //   id: "metalclad",
  //   img: "/Products/metalclad-paint.png",
  //   titleKey: "product_metalclad_title",
  //   descKey: "product_metalclad_desc",
  //   fallbackTitle: "Metalclad Protective Enamel",
  //   fallbackDesc:
  //     "Durable coating for metal surfaces, designed to resist rust, peeling, and the elements.",
  // },
  {
    id: "metal_paint",
    img: "/Products/metal-paint.png",
    titleKey: "product_metal_paint_title",
    descKey: "product_metal_paint_desc",
    fallbackTitle: "Direct-to-Metal Paint",
    fallbackDesc:
      "Used on railings, doors and exterior metal to provide a tough, protective finish.",
  },
  {
    id: "distinction",
    img: "/Products/distinction-paint.png",
    titleKey: "product_distinction_title",
    descKey: "product_distinction_desc",
    fallbackTitle: "Distinction Exterior Coating",
    fallbackDesc:
      "High-quality exterior paint formulated to keep colour and sheen looking sharp over time.",
  },
  // {
  //   id: "xpert_paint",
  //   img: "/Products/x-pert-paint.png",
  //   titleKey: "product_xpert_paint_title",
  //   descKey: "product_xpert_paint_desc",
  //   fallbackTitle: "Dulux X-PERT Interior/Exterior",
  //   fallbackDesc:
  //     "Versatile coating used where a tough, reliable finish is needed on a variety of surfaces.",
  // },
  {
    id: "alex_caulk",
    img: "/Products/alex-caulk.png",
    titleKey: "product_alex_caulk_title",
    descKey: "product_alex_caulk_desc",
    fallbackTitle: "Alex Flex / Caulking",
    fallbackDesc:
      "Flexible caulk used to seal gaps and joints around trim, windows and doors before painting.",
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
            "We work with professional-grade products chosen for durability, clean finishes, and reliable performance in Montreal homes."}
        </p>

        {/* 2-column grid, text left / image right */}
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p) => {
            const title = t(p.titleKey) || p.fallbackTitle;
            const desc = t(p.descKey) || p.fallbackDesc;

            return (
              <article
                key={p.id}
                className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-6 bg-sky-50 rounded-xl shadow-lg p-4 md:p-6"
              >
                {/* TEXT LEFT */}
                <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3">
                    {desc}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-sky-700 font-semibold">
                    {t("products_pro_note") ||
                      "Professional-grade product for long-lasting results"}
                  </p>
                </div>

                {/* IMAGE RIGHT */}
                <div className="w-full md:w-[260px] flex justify-center">
                  <div className="bg-white rounded-xl shadow-md p-4 max-w-[260px] w-full flex items-center justify-center">
                    <img
                      src={p.img}
                      alt={title}
                      className="w-full h-48 md:h-56 object-contain"
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
