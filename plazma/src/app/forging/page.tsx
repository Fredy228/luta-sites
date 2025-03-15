import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";
import { PortfolioDescripType } from "@/types/portfolio-descrip";

const description: PortfolioDescripType = {
  title: "Наша компания предлагает",
  description: [
    "Создавать красоту можно различными способами, и наша фигурная резка металла – один из вариантов на рассмотрение. Есть множество вещей, которые можно воплотить в реальность только с нашей услугой, поэтому давайте узнаем, какие есть преимущества опции!",
    "Создавая элементы ковки из листа металла, мы можем полностью заменить работу кузнеца. Нам нет необходимости долго гнуть детальки, постоянно сверяться с размерами, чертежами и набросками, долго стукать молотком, создавая необходимые изгибы. Плазменный станок с ЧПУ делает всю работу за нас, надо только задать ему необходимый макет.",
  ],
  sections: [
    {
      id: 1,
      title: "Преимущества и красота",
      text: [
        "Наша компания предоставляет свои услуги на рынке Одессы уже более 10 лет. Мы занимаемся резкой тонкого металла, а также листов до 200 мм толщиной при помощи плазмореза. Роботизированная установка имеет множество преимуществ, которые делают работу кузнеца и лазерной резки менее значимыми в наше время.",
        [
          "Фигурная резка металла на ЧПУ доступна каждому. Это очень удобно и не сложно.",
          "Услуга очень быстра и напоминает работу принтера, вот только мы не печатаем, а режем. Кузнец медленнее плазмы в 10 раз. Еще в 4 раза опережаем по скорости работы лазерный станок.",
          "Точность очень высока, а края в конечном итоге не будут иметь окалин или наплывов. Легкая обработка и сразу отдавать на покраску.",
          "ЧПУ позволяет воплощать в реальность чертежи любой сложности, ведь ограничений нет, они лишь в наших мыслях и идеях.",
          "Можно нарезать красивые элементы декора, пригласить сварщика и по своим наброскам создавать уникальные ворота, заборы, ограждения или калитки.",
        ],
        "Последний пункт – это даже отличная идея для открытия собственного бизнеса. Вы заказываете необходимые элементы и создаёте на наших мощностях услугу «под ключ». Необходимые элементы крепятся друг к другу сваркой, а значит работа по созданию ворот или заборов не займёт много времени.",
      ],
    },
    {
      id: 2,
      title: "Коротко о макетах",
      text: [
        "Резка тонкого металла, включая черный металл и множество цветных, доступна по стоимости. Присылайте свои макеты, чтобы мы могли проконсультировать Вас по услуге более детально.",
        "Чертежи создаются в специализированных программах для макетирования. Если нет желания разбираться в сложном софте, можно поискать чертежи в интернете, выбрать что-то подходящее и заказать на порезку",
        "Дополнительная услуга – создание макетов по Вашим требованиям. Покажите понравившиеся фотопримеры или присылайте наброски, а наши специалисты сделают всё необходимое в сжатые сроки!",
      ],
    },
  ],
};

export default async function ForgingPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.FORGING);
  return (
    <Portfolio
      title={"Элементы ковки"}
      description={description}
      galleryPortfolio={data}
    />
  );
}
