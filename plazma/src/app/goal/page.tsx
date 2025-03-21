import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";
import { PortfolioDescripType } from "@/types/portfolio-descrip";

const description: PortfolioDescripType = {
  title: "Как можно выделиться на фоне своих соседей?",
  description: [
    "Красиво украшать свой дом и придомовую территорию – это наше родное, любимое занятие. Мы все хотим выделяться, смотреться лучше других, знать больше, чем знаем.",
    "Сегодня мы рады предложить Вам фигурную резку металла, которая открывает множество перспектив по работе с листами как черного, так и цветного металла. Словно на простом принтере можно создать элементы, которые будут служить Вам верой и правдой не одно десятилетие, а при должном уходе вещь послужит и будущим поколениям.",
    "Ворота, калитки или двери – это первое, на что обращают внимание мимо идущие и все Ваши соседи вокруг. Мало кто уделяет воротам и калиткам должное внимание, ведь есть не так уж много способов выделиться, но кто решается, обращается к кузнецам для получения эксклюзива, или к новым автоматизированным решениям по типу поднимающихся роллетов.",
    "Наша компания «Новые лестницы» предлагает другой вариант – фигурную резку металла с использованием станка ЧПУ, который работает под управлением компьютера. Мы задаем необходимые чертежи машине, а из листа металла плазма вырежет необходимые компоненты. Услуга уникальная, быстра, точна и главное – доступна по стоимости!",
    "Мы можем создавать резные ворота, двери, калитки во двор или между вашим и соседским дворами.",
  ],
  sections: [
    {
      id: 1,
      title: "Флюгеры",
      text: [
        "Еще отличный пример – флюгеры. Это древние металлические конструкции, которые мы очень редко можем видеть на крышах домов. Это петухи, рыцари, знаки зодиака и многое другое.",
        "Флюгеры раньше служили для указания направления ветра, но в дальнейшем к изделию добавились стороны света. В наше время флюгер был немного изменен и дополнился возможностью изменять скорость ветра, если это необходимо хозяевам.",
        "Плазморез может изготовить деталь любой сложности, будь то классических петух, который на Руси считался символом наступления нового дня, рассвета и бдительности. По чертежам у нас часто заказывают флюгеры в виде птиц, кошек, собак, сказочных персонажей, волков, знаков зодиака, гербов семьи и другие элементы.",
        "В качестве бизнес-идеи мы можем предложить производство ворот и флюгеров. Металлические конструкции, созданные по вашим макетам, могут быть дополнены логотипом компании или сайтом и номером телефона. Таким образом можно легко наладить собственное производство на наших мощностях и открыть свой магазин.",
        "Обращайтесь, мы будем рады сотрудничеству!",
      ],
    },
  ],
};

export default async function GoalPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.GOAL);
  return (
    <Portfolio
      title={"Ворота, калитки, двери, флюгера"}
      description={description}
      galleryPortfolio={data}
    />
  );
}
