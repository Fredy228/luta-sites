import { StaticImageData } from "next/image";

export type InfoPortfolioType = {
  text: Array<string>;
  sections: Array<{
    id: number;
    title: string;
    text: Array<string>;
  }>;
  photos: Array<StaticImageData>;
};

export type PortfolioType = {
  id: number;
  img: StaticImageData;
  title: string;
  text: string;
  info: InfoPortfolioType;
  link: string;
};

import img_1 from "@/../public/img/list-portfolio/list-portf-1.webp";
import img_2 from "@/../public/img/list-portfolio/list-portf-2.webp";
import img_3 from "@/../public/img/list-portfolio/list-portf-3.webp";

import img_1_1 from "@/../public/img/list-portfolio/list-portf-1-1.webp";
import img_1_2 from "@/../public/img/list-portfolio/list-portf-1-2.webp";
import img_1_3 from "@/../public/img/list-portfolio/list-portf-1-3.webp";
import img_1_4 from "@/../public/img/list-portfolio/list-portf-1-4.webp";

import img_2_1 from "@/../public/img/list-portfolio/list-portf-2-1.webp";
import img_2_2 from "@/../public/img/list-portfolio/list-portf-2-2.webp";
import img_2_3 from "@/../public/img/list-portfolio/list-portf-2-3.webp";

import img_3_1 from "@/../public/img/list-portfolio/list-portf-3-1.webp";
import img_3_2 from "@/../public/img/list-portfolio/list-portf-3-2.webp";
import img_3_3 from "@/../public/img/list-portfolio/list-portf-3-3.webp";
import img_3_4 from "@/../public/img/list-portfolio/list-portf-3-4.webp";
import img_3_5 from "@/../public/img/list-portfolio/list-portf-3-5.webp";
import img_3_6 from "@/../public/img/list-portfolio/list-portf-3-6.webp";
import { GalleryTypeEnum } from "@/types/gallery";

export const listPortfolio: PortfolioType[] = [
  {
    id: 1,
    img: img_1,
    title: "Резка алюминия",
    link: `/${GalleryTypeEnum.ALUMINUM}`,
    text: "Любой макет, созданный в специализированных программах, мы отправляем предварительно на симуляцию резки.",
    info: {
      text: [
        "Цветные металлы в готовых листах – это очень удобно. Можно создавать различные детали с применением технологии плазменной резки. Существует множество способов резки этого цветного металла, но очень важно найти более точный, экономичный и надежный вариант. По этим пунктам подходит именно плазма.",
        "Раскрой листового металла дает возможность создавать красивые вещи для дополнения Вашего домашнего интерьера. При желании, Вы можете при помощи нашей компании организовать собственное производство действительно полезных и уникальных вещей, которые в дальнейшем можно продавать.",
      ],
      sections: [
        {
          id: 1,
          title: "Что у нас заказывают",
          text: [
            "Один из самых простых вариантов, что наша компания создавала – небольшие слитки под переплавку, когда у клиентов есть собственные формочки и они привыкли заниматься ручным литьём.",
            "Алюминий также используется рекламными агентствами, создающими интересные вывески и логотипы компаний. Это броско, уникально, может дополняться ЛЭД освещением с переменным цветом свечения.",
            "Из данного материала у нас довольно часто заказывают рамы под настенные часы или зеркала. Это выглядит красиво, дорого и способно служить Вашей семье не одно поколение.",
            "Еще один пример – изголовья кроватей. Если поменялся стиль спальной комнаты, то кровать, выбивающуюся по внешнему виду, можно не выбрасывать, а заменить изголовье на красоту из алюминия.",
            "Водители маршруток часто заказывают раскрой листового металла для получения накладок на ступени. Мы используем рифлёный алюминий, который не позволит пассажирам падать при спусках и подъемах в автотранспорт.",
          ],
        },
        {
          id: 2,
          title: "О процессе работы",
          text: [
            "Наша компания предлагает Вам услугу плазменной резки металлов в городе Одессе. Весь процесс не сложен и осуществляется при помощи станка ЧПУ, который получает Ваши чертежи и начинает свою работу, напоминающую плоттер, нарезающий наклейки.",
            "Погрешность нашей установки минимальна и составляет всего 0,01 мм, т.е. это меньше, чем толщина волоса.",
            "Как было сказано в начале статьи, способов резки много, но надо найти самую лучшую технологию. Наша компания ее и предоставляет. Любой макет, созданный в специализированных программах, мы отправляем предварительно на симуляцию резки. Это необходимо по причине хрупкости металла и его стоимости, ведь не хочется потерять лист, не получив желаемого результата.",
            "Если симуляция выявляет ошибки, макет отправляется на мелкие корректировки. Исправили? Давайте снова пройдём предварительную симуляцию!",
            "Обращайтесь в нашу компанию, и мы всегда поможем Вам!",
          ],
        },
      ],
      photos: [img_1_1, img_1_2, img_1_3, img_1_4],
    },
  },
  {
    id: 2,
    img: img_2,
    title: "Резка цветных металлов",
    link: `/${GalleryTypeEnum.BRASS}`,
    text: "Это роботизированный станок, который принимает макеты любой сложности и воспроизводит их с максимальной точностью",
    info: {
      text: [
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
          title: "Специфика работы с цветными металлами",
          text: [
            "Наша компания проводит поэтапные работы по резке металлов плазморезом ЧПУ. Это роботизированный станок, который принимает макеты любой сложности и воспроизводит их с максимальной точностью, а погрешность если и есть, она не больше толщины человеческого волоска. На данный момент — это максимум и точнее не работает ни одна установка.",
            "Работа с указанным металлом обязана проходить аккуратно, ведь материал мягкий и не любой известный способ резки может подойти. Плазморез ЧПУ по своей работе напоминает плоттер, режущий наклейки и значки, вот только у нас резаком выступает плазма. Мы можем получать контурные элементы в короткий срок и это хорошая новость.",
            "Стоит знать!!! Перед запуском станка мы все Ваши макеты проверяем на специальном симуляторе. Это позволяет нам удостовериться, будут ли проблемы с деталью или у нас нет никаких запинок в производстве. Сами понимаете, материал мягкий, а листовой алюминий стоит денег. По этой причине, если симулятор показывает ошибки, редактируем макет до правильного результата и снова запускаем тестирование.",
            "Наша технология удобнее и эффективнее водореза. Мы смогли добиться на плазме максимальной детальности и качества, что дальнейшая обработка элементов практически не требуется.",
            "У Вас еще остались вопросы? Звоните по указанному на сайте номеру телефона, и мы предоставим необходимую консультацию касательно цен, макетов и сроков выполнения заказа.",
          ],
        },
      ],
      photos: [img_2_1, img_2_2, img_2_3],
    },
  },
  {
    id: 3,
    img: img_3,
    title: "Резка металла",
    link: `/${GalleryTypeEnum.METALCUTTING}`,
    text: "Резать металл можно различными способами, но мы затронем одну технологию, которая удивит Вас и даже порадует",
    info: {
      text: [
        "Резать металл можно различными способами, но мы затронем одну технологию, которая удивит Вас и даже порадует.",
        "Наша компания работает на рынке Одессы более 10 лет, и мы успели обзавестись множеством интересных макетов, узнать все тонкости работы с листовым металлом (черным или цветным), а также работе с плазмой.",
      ],
      sections: [
        {
          id: 1,
          title: "Варианты резки металлов",
          text: [
            "Можно резать вручную при помощи газового резака, болгарки или пойти путем резки на роботизированных установках, коими являются лазерная и плазменная.",
            "Вручную работать неудобно, долго, мы получаем дополнительные расходы, а результат труда – не точная деталь с погрешностями. Она нуждается в дополнительной обработке, то есть, мы снова тратим время.",
            "Лазерный станок имеет маленький пучок лазера. Его преимущество в возможности резать мелкие элементы. Минус – цена и скорость работы, которая в 4 раза медленнее плазмы.",
            "Наш станок работает веществом, являющимся четвертым состоянием вещества. Каждый из нас знает 3 состояния. Это техническая сторона вопроса, но если коротко, то о превращении жидкой воды в лёд мы все знаем, т.е. мы получаем уже твердое состояние вещества. Третье тоже знакомо каждому – газообразное, получаемое в результате воздействия высоких температур на жидкость (образование пара).",
            "Мало кто знает, но, если повысить температуру для жидкости, пар, соединенный с электричеством, создаст ту самую плазму, которая режет листы металла толщиной до 20 мм.",
            "Задаваясь вопросом «сколько стоит плазменная резка в Одессе», мы готовы сделать точный просчёт для Вас, если Вы уже создали макет с необходимыми Вам размерами.",
          ],
        },
        {
          id: 2,
          title: "Преимущества плазменного станка",
          text: [
            "Наш станок точный. У него минимальная погрешность, которая не превышает толщину человеческого волоска. В наше время - это максимум точности.",
            "Места срезов не требуют особой обработки, т.к. мы не получаем наплывы, а лишь немного шлака, который легко сбивается молотком. Большой плюс этого пункта в том, что полученная деталь может через короткое время отправляться на покраску.",
            "Наш станок справляется с любыми чертежами, т.е. сложность не имеет значения.",
          ],
        },
        {
          id: 3,
          title: "О макетах",
          text: [
            "За столько лет работы мы смогли собрать базу макетов. В ней содержится свыше 100 тысяч чертежей, поэтому если не умеете чертить в специализированных программах, обращайтесь к нам и мы предоставим Вам доступ к нашей коллекции.",
            "Если чертить не умеете и наша база не нужна, ищите примеры работ в интернете, делайте собственные наброски, а мы в качестве дополнительной услуги предоставим Вам специалиста, который начертит всё в программе для Вас.",
            "Обращайтесь к нам и мы продемонстрируем высокое качество плазмы в Одессе!",
          ],
        },
      ],
      photos: [img_3_1, img_3_2, img_3_3, img_3_4, img_3_5, img_3_6],
    },
  },
];
