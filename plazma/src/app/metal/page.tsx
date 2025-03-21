import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";
import { PortfolioDescripType } from "@/types/portfolio-descrip";

const description: PortfolioDescripType = {
  title: "Резка толстого металла",
  description: [
    "У каждого из нас бывают моменты, когда на руках не оказывается нужной детали, а в магазинах ее просто не найти. Раньше бы пришлось заказывать литьё или организовывать этот процесс самостоятельно, однако сейчас появились новые возможности.",
    "Резка толстого металла может проходить быстро и очень чётко, если использовать станки ЧПУ. Пожелав отдавать предпочтения болгаркам, газовым резакам, мы получаем дополнительные расходы на диски или газ, рискуем и теряем точность, а это, пожалуй, самый сильный фактор, ради которого и затевается вся работа.",
    "Наша компания предоставляет свои услуги на рынке Одессы более 10 лет. Мы занимаемся резкой металла плазмой, которая благодаря своим температурам может справляться с листовым железом толщиной 20 и даже 25 мм.",
    "Если нужно работать с материалом указанных толщин, то прибегать к подобной услуге, но на лазерном станке не стоит. Этот станок обеспечивает качество работы только с тонкими листами, дает больше преимуществ на мелких элементах, ведь пучок лазера в 2 раза тоньше пучка плазмы, но за все прелести придется заплатить больше, чем за резку толстого металла нашим ЧПУ станком.",
  ],
  sections: [
    {
      id: 1,
      title:
        "Что представляет из себя плазморез и какие преимущества у этой установки?",
      text: [
        "Многие из нас знают, что существует 3 состояния вещества: твердое, жидкое, газообразное. Не многие знают, что после газообразного состояния можно получить 4 тип – плазму. Увеличивая немного температуру и добавляя электричество, образуется тот самый пучок, который справляется с разрезанием различных металлов.",
        "Касательно преимуществ, вот краткий список основных качеств:",
        [
          "Резка металла плазмой занимает мало времени;",
          "Используя толстое железо, на краях срезов останутся небольшие следы шлака, который легко сбивается;",
          "В местах срезов края не получаются оплавленными, а значит нужные детали не подвергаются дальнейшей обработке и таким образом мы экономим своё время.",
          "Станок подключен к компьютеру и способен воспроизводить чертежи любой сложности.",
          "Установка работает как с черным, так и с цветным листовым металлом.",
          "Эту технологию стоит заказать, ведь у нее практически нет минусов. Из минусов стоит упомянуть, что станок компьютеризирован, а значит принимает в работу чертежи, созданные в программе AutoCAD, KOMPAS 3D или 3Ds MAX.",
        ],
        "Этот софт необходимо осваивать, но, если нет желания, ищите макеты в интернете или создавайте наброски, проставляйте размеры и высылайте нам! Также можно просто заказать у наших мастеров услугу по созданию чертежа, потом и резку, а через некоторое время приехать за готовым элементом.",
        "Звоните и мы окажем Вам необходимую консультацию!",
      ],
    },
  ],
};

export default async function IndustrialPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.METAL);
  return (
    <Portfolio
      title={"Резка толстого металла"}
      description={description}
      galleryPortfolio={data}
    />
  );
}
