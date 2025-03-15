import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";
import { PortfolioDescripType } from "@/types/portfolio-descrip";

const description: PortfolioDescripType = {
  title: "Специфика работы с цветными металлами",
  description: [
    "Использовать в работе цветной металл – это хорошая возможность создавать те вещи, которые невозможно найти в магазинах и даже в интернете. Любая деталь, начерченная Вами, будет создана с учетом размеров и сроков максимально качественно и по доступным ценам.",
    "Наша компания поможет Вам осуществить художественную резку металла, изготавливая дорогие элементы декора для Вашего дома. У Ваших знакомых просто не останется слов, если они увидят всю приготовленную Вами красоту.",
    "Цветной металл может быть использован для производства красивых кроватей, где изголовья, бортики будут резными и напоминать стиль «лакшери».",
    "В ванную комнату с красивой дорогой плиткой мы рекомендуем резные плинтусы, которые будут в 1000 раз лучше пластиковых и деревянных.",
    "Часто в нашу компанию поступают заказы декоративных элементов, которые подходят под зеркала, настенные часы.",
    "Также художественная резка металла позволяет получить интересные резные полочки в прихожую, чтобы прямо с порога избавиться от напрягающих руки вещей.",
  ],
  sections: [
    {
      id: 1,
      title: "",
      text: [
        "Наша компания проводит поэтапные работы по резке металлов плазморезом ЧПУ. Это роботизированный станок, который принимает макеты любой сложности и воспроизводит их с максимальной точностью, а погрешность если и есть, она не больше толщины человеческого волоска. На данный момент — это максимум и точнее не работает ни одна установка.",
        "Работа с указанным металлом обязана проходить аккуратно, ведь материал мягкий и не любой известный способ резки может подойти. Плазморез ЧПУ по своей работе напоминает плоттер, режущий наклейки и значки, вот только у нас резаком выступает плазма. Мы можем получать контурные элементы в короткий срок и это хорошая новость.",
        "Стоит знать!!! Перед запуском станка мы все Ваши макеты проверяем на специальном симуляторе. Это позволяет нам удостовериться, будут ли проблемы с деталью или у нас нет никаких запинок в производстве. Сами понимаете, материал мягкий, а листовой алюминий стоит денег. По этой причине, если симулятор показывает ошибки, редактируем макет до правильного результата и снова запускаем тестирование.",
        "Наша технология удобнее и эффективнее водореза. Мы смогли добиться на плазме максимальной детальности и качества, что дальнейшая обработка элементов практически не требуется.",
        "У Вас еще остались вопросы? Звоните по указанному на сайте номеру телефона, и мы предоставим необходимую консультацию касательно цен, макетов и сроков выполнения заказа.",
      ],
    },
  ],
};

export default async function BrassPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.BRASS);
  return (
    <Portfolio
      title={"Резка цветных металлов"}
      description={description}
      galleryPortfolio={data}
    />
  );
}
