Vue.createApp({
  data: () => ({
    title: 'План по изучению Vue.js',
    stepsContent: [
      'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберём всю базу фреймворка.  ',
      'Одни из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов: как с разными разработками, слотами, разными директивами и динамическими компонентами.',
      'В данном блоке вы узнаете все о том, как работать с мультистраничностью во Vue. Мы создадим минисайт с email в данном блоке, где вы на практике увидите как работать с динамическим роутером.',
      'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.',
      'Одни из ключевых обновлений в Vue 3 версии с новым альтернативным синтаксисом Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться динамичным синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
    ],
    currentStep: 1,
    totalSteps: 5,
    isFinished: false
  }),
  methods: {
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      } else if (this.currentStep === this.totalSteps && !this.isFinished) {
        this.isFinished = true;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.isFinished = false;
      }
    },
    restart() {
      this.currentStep = 1,
      this.isFinished = false
    },
    goToStep(step) {
      if (this.isFinished) {
        this.currentStep = step;
        this.isFinished = false
      } else if (step <= this.totalSteps) {
        this.currentStep = step;
        if (step < this.totalSteps) {
          this.isFinished = false;
        }
      }
    }
  },
  template: `
  <div class="content">
    <h1>{{ title }}</h1>
    <p>{{ stepsContent[currentStep - 1] }}</p>
    <div class="steps">
      <div 
        v-for="step in totalSteps" 
        :key="step" class="step" 
        :class="{ active: step <= currentStep, past: step < currentStep }" 
        @click="goToStep(step)"
        :style="{
          cursor: 'pointer'
        }"
      > {{ step }} 
    </div>
    </div>
    <div class="buttons">
      <button 
        v-if="!isFinished" 
        class="btn btn-secondary" 
        @click="prevStep" 
        :disabled="currentStep === 1"
      > Назад 
    </button>
      <button 
        class="btn" 
        :class="{
          'btn-success': !isFinished, 
          'btn-primary': isFinished 
        }" 
        @click="isFinished ? restart() : nextStep()"
      >
        {{ currentStep === totalSteps && !isFinished ? 'Закончить' : isFinished ? 'Начать заново' : 'Вперёд' }}
      </button>
    </div>
  </div>
`
}).mount('#app');
