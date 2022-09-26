<template>
  <div>
    <Test_solving :questions-prop="rawTests"></Test_solving>
  </div>
</template>
<script>
import Test_solving from "@/components/test-solving/Test_solving";
export default {
  name: "tab-12",
  components: { Test_solving },
  data() {
    return {
      rawTests: {
        questions: [
          {
            id: 0,
            question:
              "Как передаются COVID-19 и острые респираторные вирусные инфекции (ОРИ)?",
            suggestions: [
              {
                suggestion: "воздушно-капельным и контактно-бытовым путем",
                res_number: 1,
                id: "emaple1",
                isTrue: true,
              },
              {
                suggestion:
                  "воздушно-капельным и трансмиссивным путем через укусы насекомых",
                res_number: 2,
                id: "emaple2",
                isTrue: false,
              },
              {
                suggestion: "контактным и половым путем ",
                res_number: 3,
                id: "emaple3",
                isTrue: false,
              },
              {
                suggestion: "простейшие ",
                res_number: 4,
                id: "emaple4",
                isTrue: false,
              },
            ],
          },
          {
            id: 1,
            question: "Укажите наиболее частые симптомы COVID-19?",
            suggestions: [
              {
                suggestion: "Повышение температуры, слабость, сухой кашель",
                res_number: 5,
                id: "emaple5",
                isTrue: true,
              },
              {
                suggestion: "Тошнота, диарея, боль в животе",
                res_number: 6,
                id: "emaple6",
                isTrue: false,
              },
              {
                suggestion: "Головная боль, повышение температуры, сыпь.",
                res_number: 7,
                id: "emaple7",
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question: "Для кого особенно опасны COVID-19 и ОРИ? ",
            suggestions: [
              {
                suggestion:
                  "для пожилых, лиц с хроническими заболеваниями, ослабленным иммунитетом",
                res_number: 9,
                id: "emaple9",
                isTrue: true,
              },
              {
                suggestion: "для детей и подростков  ",
                res_number: 10,
                id: "emaple10",
                isTrue: false,
              },
              {
                suggestion: "для беременных женщин",
                res_number: 11,
                id: "emaple11",
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "Какие меры индивидуальной защиты от COVID-19 и ОРИ являются наиболее эффективными?",
            suggestions: [
              {
                suggestion: "Держаться на расстоянии от других ",
                res_number: 13,
                id: "emaple13",
                isTrue: false,
              },
              {
                suggestion: "Носить маску, хорошо проветривать помещения ",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
              {
                suggestion: "Регулярно проводить гигиеническую обработку рук",
                res_number: 15,
                id: "emaple15",
                isTrue: false,
              },
              {
                suggestion: "Все ответы верны",
                res_number: 16,
                id: "emaple16",
                isTrue: true,
              },
            ],
          },
          {
            id: 4,
            question:
              "Какие меры общественной профилактики от COVID-19 являются наиболее эффективными?",
            suggestions: [
              {
                suggestion:
                  "Ранняя диагностика, современное оповещение о случаях заражения, изоляция больных, вакцинопрофилактика",
                res_number: 17,
                id: "emaple17",
                isTrue: false,
              },
              {
                suggestion:
                  "Запрет на проведение массовых мероприятий, переход на удаленную работу ",
                res_number: 18,
                id: "emaple18",
                isTrue: true,
              },
              {
                suggestion:
                  "Помещение заболевших в карантин, вакцинопрофилактика ",
                res_number: 19,
                id: "emaple19",
                isTrue: false,
              },
            ],
          },
          {
            id: 5,
            question:
              "Являются ли результаты теста на ВИЧ-инфекцию конфиденциальной информацией?",
            suggestions: [
              {
                suggestion:
                  "Нет, в случае обнаружения антител к ВИЧ врач должен оповестить об этом ближайших родственников пациента",
                res_number: 21,
                id: "emaple21",
                isTrue: false,
              },
              {
                suggestion:
                  "Да, информация о положительном результате на ВИЧ инфекцию никогда не передается третьим лицам",
                res_number: 22,
                id: "emaple22",
                isTrue: false,
              },
              {
                suggestion:
                  "Хотя результат теста на ВИЧ должен оставаться конфиденциальным, другие профессионалы — например, консультанты или социальные работники, — должны иметь доступ к информации о ВИЧ-положительном статусе человека, чтобы оказать ему необходимую помощь.",
                res_number: 23,
                id: "emaple23",
                isTrue: true,
              },
            ],
          },
          {
            id: 6,
            question:
              "Определите навыки, необходимые для уверенного общения с людьми, в коллективе и с уязвимыми группами",
            suggestions: [
              {
                suggestion:
                  "Понимать свои чувства и открыто о них говорить, умение говорить 'нет'",
                res_number: 25,
                id: "emaple25",
                isTrue: false,
              },
              {
                suggestion: "Доброжелательность, искренность, сочувствие",
                res_number: 26,
                id: "emaple26",
                isTrue: false,
              },
              {
                suggestion: "Умение уважать и понимать чувства других людей",
                res_number: 27,
                id: "emaple27",
                isTrue: false,
              },
              {
                suggestion: "Bсе ответы верны",
                res_number: 28,
                id: "emaple28",
                isTrue: true,
              },
            ],
          },
          {
            id: 7,
            question:
              "Выделите основные принципы эффективной коммуникации для социального работника",
            suggestions: [
              {
                suggestion:
                  "создание благоприятной среды для общения, доверительное отношение, активное слушание",
                res_number: 29,
                id: "emaple29",
                isTrue: true,
              },
              {
                suggestion: "Активное слушание, открытые жесты, поза, мимика",
                res_number: 30,
                id: "emaple30",
                isTrue: false,
              },
              {
                suggestion: "Активное слушание, обратная связь",
                res_number: 31,
                id: "emaple31",
                isTrue: false,
              },
              {
                suggestion: "Уважение и забота",
                res_number: 32,
                id: "emaple32",
                isTrue: false,
              },
            ],
          },
          {
            id: 8,
            question:
              "Состояние человека, связанное с последствиями длительного рабочего напряжения, со снижением продуктивности в работе, с чувством эмоциональной опустошенности и истощения, называют",
            suggestions: [
              {
                suggestion: "Aпатией",
                res_number: 9,
                id: "emaple33",
                isTrue: false,
              },
              {
                suggestion: "Cтрессом",
                res_number: 9,
                id: "emaple34",
                isTrue: false,
              },
              {
                suggestion: "Bыгоранием",
                res_number: 9,
                id: "emaple35",
                isTrue: true,
              },
              {
                suggestion: "Bыгоранием",
                res_number: 9,
                id: "emaple36",
                isTrue: false,
              },
            ],
          },
          {
            id: 9,
            question:
              "Кто, по Вашему мнению, в большей степени подвержен профессиональному выгоранию?",
            suggestions: [
              {
                suggestion:
                  "добрые, трудолюбивые и эмоционально вовлеченные в дело люди ",
                res_number: 10,
                id: "emaple37",
                isTrue: false,
              },
              {
                suggestion:
                  "Врачи, сотрудники общественных организаций, сотрудники корпораций. Люди, с большой ответственностью на работе. ",
                res_number: 10,
                id: "emaple38",
                isTrue: false,
              },
              {
                suggestion:
                  "Социальные работники, работающие с уязвимыми группами",
                res_number: 10,
                id: "emaple39",
                isTrue: false,
              },
              {
                suggestion: "все перечисленные категории.",
                res_number: 10,
                id: "emaple40",
                isTrue: true,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 70,
        quesCount: 10,
        beginDate: this.beginDate,
      },
    };
  },
  props: {
    beginDate: {
      type: Date,
    },
  },
  methods: {
    newDate() {
      this.$emit("newDate");
    },
  },
};
</script>
