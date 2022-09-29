<template>
  <div class="test__body" id="test_solving_component">
    <!-- <TestPagination class="mb-40" :questions-prop="questionsProp.questions" /> -->
    <div class="d-flex flex-column align-items-center" v-if="!testSolving">
      <div class="result__test">
        <div v-if="testResults.result.length > 0">{{ testResultBall() }} %</div>
        <div v-else>null</div>
      </div>
      <button
        @click="start(questionsProp.questions)"
        class="modal_footer-btn refresh_btn"
      >
        Qayta urunish
      </button>
    </div>
    <div class="d-flex justify-content-center" v-if="testSolving">
      <div>
        <div
          class="test__items"
          v-for="(item, idx) in questionsProp.questions"
          :key="idx"
        >
          <div id="test_question">{{ idx + 1 }}. {{ item.question }}</div>
          <div class="test__answers">
            <div class="test__options">
              <div v-for="(answers, i) in item.suggestions" :key="i">
                <label class="test__options-item">
                  <div class="d-flex">
                    <input
                      class="form_check_input"
                      type="radio"
                      :id="answers.id"
                      :value="answers"
                      v-model="selectedAnswer[idx]"
                    />
                    <span class="app-radio-text">
                      {{ answers.suggestion }}
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="test__details">
          <div class="test__details-left"></div>
          <div class="test__details-right">
            <div
              class="test__details-item"
              :class="selectedAnswer.length === 0 ? 'disabled' : ''"
              @click="testFinish"
            >
              <div class="test__details-icon">
                <img src="/icons/finish.svg" alt="" />
              </div>
              <p>Tugatish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppModal v-if="onlineTestAnswers" @close="closeModal">
      <div class="modal__wrap">
        <div class="modal__body">
          <div class="progress__bar">
            <div class="progress__bar-line" :style="{ width: '%' }"></div>
          </div>
          <div class="text-center" v-if="loading">
            <div
              class="spinner-border spinner-border-sm text-dark"
              role="status"
            ></div>
          </div>
          <div class="result__test">
            <div v-if="!loading && testResults.result.length > 0">
              {{ testResultBall() }}%
            </div>
            <div v-else>null</div>
          </div>
        </div>
        <div class="modal_footer">
          <button
            class="modal_footer-btn refresh_btn"
            @click="findAgain(questionsProp.questions)"
          >
            Qayta urunish
          </button>
          <button class="modal_footer-btn close_btn" @click="closeModal">
            закрыть
          </button>
        </div>
      </div>
    </AppModal>
  </div>
</template>

<script>
import AppModal from "@/components/shared-components/AppModal.vue";
import TokenService from "@/service/TokenService";
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Test_solving",
  components: { AppModal },

  data() {
    return {
      selectedAnswer: [],
      quesCount: null,
      onlineTestAnswers: false,
      testCount: this.questionsProp.quesCount,
      maxBall: this.questionsProp.maxBall,
      testBall: null,
      beginDate: "2022-09-19T06:01:14.691Z",
      endDate: "2022-09-19T06:01:14.691Z",
      moduleId: this.questionsProp.moduleId,
      disabledBtn: true,
      resultModuleId: [],
    };
  },
  props: {
    questionsProp: {
      id: Number,
      maxBall: Number,
      quesCount: Number,
      moduleId: Number,
      questions: [],
    },
  },
  computed: {
    ...mapState(["testSolving", "testResults", "loading"]),
  },
  methods: {
    ...mapMutations(["setTestSolving"]),
    async testFinish() {
      this.setTestSolving(false);
      this.onlineTestAnswers = true;
      this.quesCount = this.selectedAnswer.filter((answer) => answer.isTrue);
      this.quesCount = this.quesCount.length;
      this.testBall = Math.round(
        (this.quesCount / this.questionsProp.questions.length) * 100
      );
      try {
        await axios
          .post(
            "http://ocelot.atest.uz/main/Test/PostResult",
            {
              testCount: this.testCount,
              ansCount: this.quesCount,
              maxBall: this.maxBall,
              testBall: this.testBall,
              beginDate: this.beginDate,
              endDate: this.endDate,
              modulId: this.moduleId,
            },
            TokenService.headersToken()
          )
          .then((data) => {
            if (!data.error && data) {
              this.testResultBall();
              console.log(this.testBall);
            }
          })
          .catch((error) => {
            console.log("Error" + ": " + error);
          });
      } catch (error) {
        console.log(error);
      }
      this.getTest();
    },
    closeModal() {
      this.onlineTestAnswers = false;
    },
    findAgain(array) {
      this.onlineTestAnswers = false;
      this.setTestSolving(true);
      array.sort(() => Math.random() - 0.5);
    },
    start(array) {
      this.setTestSolving(true);
      array.sort(() => Math.random() - 0.3);
      this.selectedAnswer = [];
    },
    filterModuleId(idx) {
      this.resultModuleId = [];
      if (this.testResults && this.testResults.result.length > 0) {
        this.testResults.result.map((item) => {
          if (item.modulId == idx) {
            this.resultModuleId.push(item);
          }
        });
      }
    },
    testResultBall() {
      if (this.resultModuleId.length > 0) {
        return this.resultModuleId[this.resultModuleId.length - 1].testBall;
      }
    },
    getTest() {
      this.$store.dispatch("getTestResults", TokenService.headersToken());
    },
  },
  mounted() {
    if (TokenService.getToken() !== null) {
      this.getTest();
    }
    this.filterModuleId(this.moduleId);
    this.testResultBall();
    console.log(this.resultModuleId);
  },
  watch: {},
  created() {},
};
</script>

<style scoped>
.test__body {
  background-color: #e7eef5;
  border-radius: 10px;
  padding: 10px;
}
.test__details-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.test__details-item {
  margin-left: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 8%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 17px;
  cursor: pointer;
}
.test__details-item.disabled {
  opacity: 0.65;
  pointer-events: none;
  cursor: not-allowed;
}
.test__details-icon {
  margin-right: 12px;
  max-width: 25px;
  max-height: 25px;
  overflow: hidden;
}
.test__items {
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgb(70 93 122 / 8%);
  margin-bottom: 15px;
  padding: 30px;
  max-width: 850px;
  width: 100%;
}
#test_question {
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  margin-bottom: 10px;
}
.test__options {
  font-size: 16px;
  line-height: 22px;
}
.test__options-item {
  margin-bottom: 5px;
  cursor: pointer;
}
.test__options-item span {
  margin-left: 15px;
}
.modal_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal_footer button {
  font-size: 18px;
  font-weight: 600;
  padding: 0 20px;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  max-width: unset;
}
.refresh_btn {
  background: linear-gradient(279.37deg, #008ae4 0%, #a6dcff 158.68%);
}
.close_btn {
  background-color: #ff5454;
}
.result__test {
  font-size: 20px;
  display: flex;
  justify-content: center;
}
.progress__bar {
  position: relative;
  max-width: 451px;
  width: 100%;
  height: 20px;
  background: #e5ecf5;
  border-radius: 10px;
  margin-bottom: 10px;
  margin: 10px auto;
}

.progress__bar .progress__bar-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #008ae4;
  border-radius: 10px;
}
@media (max-width: 768px) {
  .test__items {
    padding: 10px;
  }
  .modal_footer {
    flex-wrap: wrap;
  }
  .close_btn {
    margin-top: 10px;
  }
}
</style>
