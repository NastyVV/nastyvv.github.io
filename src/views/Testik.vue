<template>
  <div>
    <div class="high-category">
      <div class="text">
        Тесты
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
              </div>
            </div>
            <button v-if="firstResponse.length==0" @click="OnClickFirstQuestionsComplete"> Завершить тест</button>
            {{firstResponse}}
          </div>

          <div class="info-block">
          </div>
        </div>

        <div class="mainmenu-block">
          <div class="test-block">
            <a href="#">Задание 11. МКТ, термодинамика. Изменение физических величин в процессах</a>
          </div>
          <div class="test-block"><a href="#">2</a></div>
          <div class="test-block"><a href="#">3</a></div>
          <div class="test-block"><a href="#">4</a></div>
          <div class="test-block"><a href="#">5</a></div>
          <div class="test-block"><a href="#">6</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const qfile = require ('../data/test.js')

export default {
  name: 'Testik' ,
  data(){
    return{
      firstResponse: ""
    }
  },
  methods: {
    GetFirstQuestions() {
      return qfile.default.firstgroup
    },
    OnClickFirstQuestionsComplete() {
      for (let index in this.GetFirstQuestions() .questions)  {
        this.OnClickQuestionAnswer("first_" +index)
      }
    },
    OnClickQuestionAnswer(key){
      console.log(key)
      document.querySelector('input[data-key="'+key+'"]') .setAttribute('readonly', 'readonly')
    }
  }

}
</script>
