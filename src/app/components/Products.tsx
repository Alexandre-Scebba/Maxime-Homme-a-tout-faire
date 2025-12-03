"use client";

import { useTranslation } from "../TranslationProvider";

const products = [
  {
    id: "lifemaster",
    img: "/Products/DLX_LifemasterInt_01_LowSheenEggshell_FR_HERO_1.png",
    titleKey: "product_lifemaster_title",
    descKey: "product_lifemaster_desc",
  },
  {
    id: "dul7700",
    img: "/Products/DUL7700-1GL-Z.jpg",
    titleKey: "product_dul7700_title",
    descKey: "product_dul7700_desc",
  },
  {
    id: "kitchen_bath",
    img: "/Products/Dulux-kitchen-and-bath-fr.png",
    titleKey: "product_kitchen_bath_title",
    descKey: "product_kitchen_bath_desc",
  },
  {
    id: "xpert_primer",
    img: "/Products/DULUX-XPERT-WATERBORNE-primersealer-FR.png",
    titleKey: "product_xpert_primer_title",
    descKey: "product_xpert_primer_desc",
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
            "We work with professional-grade Dulux products chosen for durability, clean finishes, and reliable performance in Montreal homes."}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <article
              key={p.id}
              className={
                "flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-white rounded-xl shadow-lg p-4 md:p-6 " +
                (i % 2 === 1 ? "md:flex-row-reverse" : "")
              }
            >
              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-gray-50 rounded-xl shadow-md p-3 max-w-[220px] w-full">
                  <img
                    src={p.img}
                    alt={t(p.titleKey) || p.titleKey}
                    className="w-full h-40 object-contain"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(p.titleKey) || p.titleKey}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3">
                  {t(p.descKey) || p.descKey}
                </p>
                <p className="text-xs uppercase tracking-wide text-sky-600 font-semibold">
                  {t("products_pro_note") ||
                    "Professional-grade product for long-lasting results"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
