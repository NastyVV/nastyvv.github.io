<template>
  <div>
    <div class="high-category">
      <div class="text">
        Заключительный тест
      </div>
      <div class="content-block">
        <div class="left-content-block">
          <div class="info-block">
            <div class="q-line" v-for="(item,index) in GetFirstQuestions().questions " :key="item.q">
              <div class="qname">
                {{item.q}}
              </div>
              <div class="qanswer">
                <input type="text" placeholder="Ответ" :data-key="'first_'+index">
                <button @click="OnClickQuestionAnswer('first_'+index)"> Готово </button>
                <span class="answer"></span>
              </div>
            </div>
            <button v-if="firstResponse.length==0" @click="OnClickFirstQuestionsComplete"> Завершить тест</button>
            {{firstResponse}}
          </div>

          <div class="info-block">
          </div>
        </div>

        <div class="mainmenu-block">
          <div class="mainmenu-block">
            <div class="test-block"><a href="/dist/assets/fizika-osnovy-mkt-obuchenie.pdf" target="_blank">Обучающие задания по МКТ</a></div>
            <div class="test-block">
              <a href="/dist/assets/fizika-osnovy-mkt-trenirovka.pdf" target="_blank">Тренировочные задания по МКТ</a>
            </div>
            <div class="test-block"><a href="/dist/assets/fizika-osnovy-mkt-kontrol.pdf" target="_blank">Контрольные задания по МКТ</a></div>
            <div class="test-block"><a href="/dist/assets/fizika-termodinamika-obuchenie.pdf" target="_blank">Обучающие задания на тему «Термодинамика»</a></div>
            <div class="test-block"><a href="/dist/assets/fizika-termodinamika-trenirovka.pdf" target="_blank">Тренировочные задания на тему «Термодинамика»</a></div>
            <div class="test-block"><a href="/dist/assets/fizika-termodinamika-kontrol.pdf" target="_blank">Контрольные задания на тему «Термодинамика»</a></div>
          </div>
        </div>
      </div>
      <div class="vverh"><a href="#">Наверх ↑</a></div>
    </div>
  </div>
</template>

<script>
const qfile = require ('../data/test.js')

export default {
  name: 'Testik' ,
  data(){
    return{
      firstResponse: "",
      answers:{}
    }
  },
  methods: {
    GetFirstQuestions() {
      return qfile.default.firstgroup
    },
    OnClickFirstQuestionsComplete() {
      for (let index in this.GetFirstQuestions() .questions)  {
        this.OnClickQuestionAnswer("first_" +index)
        const value= this.answers["first_" +index]
        const answerEl=document.querySelector('input[data-key="first_'+index+'"]').parentElement.querySelector('span')
        if (this.GetFirstQuestions().questions[index].a==value) {
          answerEl.innerHTML="Правильно!"
          answerEl.classList.add('green')
        }
        else
        {
          answerEl.innerHTML="Правильный ответ: "+this.GetFirstQuestions().questions[index].a
          answerEl.classList.add('red')
        }
      }
      console.log(this.answers)
    },
    OnClickQuestionAnswer(key){
      console.log(key)
      this.answers[key]=document.querySelector('input[data-key="'+key+'"]').value
      document.querySelector('input[data-key="'+key+'"]') .setAttribute('readonly', 'readonly')
    }
  }

}
</script>
