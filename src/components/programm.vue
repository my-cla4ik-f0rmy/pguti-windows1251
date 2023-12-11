<script setup>
import '@material/web/all';
import * as windows1251 from 'windows-1251';
</script>


<template>
  <md-list>
    <md-list-item>
      <div slot="headline">Windows-1251 в Текст</div>
    </md-list-item>
    <div>
      <md-list-item>
        <md-icon slot="start">123</md-icon>
        <md-outlined-text-field id="CP1251Input" style="width: 100%;" type="text"></md-outlined-text-field>
      </md-list-item>
      <md-list-item>
        <md-filled-button @click="convertToText()" style="width: 100%;"><md-icon
            slot="icon">swap_horiz</md-icon>Перевести</md-filled-button>
      </md-list-item>
      <md-list-item>
        <md-icon slot="start">abc</md-icon>
        <md-outlined-text-field :value="this.textOutput" style="width: 100%;"></md-outlined-text-field>
        <md-icon-button @click="copy(this.textOutput)" slot="end"><md-icon>content_copy</md-icon></md-icon-button>
      </md-list-item>
    </div>
    <md-list-item> <md-divider></md-divider></md-list-item>
    <div>
      <md-list-item>
        <div slot="headline">Текст в Windows-1251 и двоичный код</div>
      </md-list-item>
      <md-list-item>
        <md-icon slot="start">abc</md-icon>
        <md-outlined-text-field id="textInput" style="width: 100%;" type="text"></md-outlined-text-field>
      </md-list-item>
      <md-list-item>
        <md-filled-button @click="convertToCP1251()" style="width: 100%;"><md-icon
            slot="icon">swap_horiz</md-icon>Перевести</md-filled-button>
      </md-list-item>
      <md-list-item>
        <md-icon slot="start">123</md-icon>
        <md-outlined-text-field :value="this.CP1251Output" style="width: 100%;"></md-outlined-text-field>
        <md-icon-button @click="copy(this.CP1251Output)" slot="end"><md-icon>content_copy</md-icon></md-icon-button>

        <!--       <md-icon-button @click="copy()" slot="end"><md-icon>content_copy</md-icon></md-icon-button>
 --> </md-list-item>
      <md-list-item>
        <md-icon slot="start">code</md-icon>
        <md-outlined-text-field :value="this.CP1251_BinaryOutput" style="width: 100%;"></md-outlined-text-field>
        <md-icon-button @click="copy(this.CP1251_BinaryOutput)" slot="end"><md-icon>content_copy</md-icon></md-icon-button>
      </md-list-item>
    </div>
    <md-list-item> <md-divider></md-divider></md-list-item>
    <div>
      <md-list-item>
        <div slot="headline">Двоичный код в Windows-1251 и текст</div>
      </md-list-item>
      <md-list-item>
        <md-icon slot="start">code</md-icon>
        <md-outlined-text-field id="BinaryInput" style="width: 100%;" type="text"></md-outlined-text-field>
      </md-list-item>
      <md-list-item>
        <md-filled-button @click="Binary2Text2CP1251()" style="width: 100%;"><md-icon
            slot="icon">swap_horiz</md-icon>Перевести</md-filled-button>
      </md-list-item>
      <md-list-item>
        <md-icon slot="start">123</md-icon>
        <md-outlined-text-field :value="this.BinaryCP1251Output" style="width: 100%;"></md-outlined-text-field>
        <md-icon-button @click="copy(this.BinaryCP1251Output)" slot="end"><md-icon>content_copy</md-icon></md-icon-button>

        <!--       <md-icon-button @click="copy()" slot="end"><md-icon>content_copy</md-icon></md-icon-button>
 --> </md-list-item>
      <md-list-item>
        <md-icon slot="start">abc</md-icon>
        <md-outlined-text-field :value="this.BinarytextOutput" style="width: 100%;"></md-outlined-text-field>
        <md-icon-button @click="copy(this.BinarytextOutput)" slot="end"><md-icon>content_copy</md-icon></md-icon-button>

        <!--       <md-icon-button @click="copy()" slot="end"><md-icon>content_copy</md-icon></md-icon-button>
 --> </md-list-item>
    </div>
  </md-list>
</template>

<script>
export default {
  data() {
    return {
      CP1251Input: '',
      textInput: '',
      CP1251Output: '',
      textOutput: '',
      CP1251_BinaryOutput: '',
      binaryInput: '',
      BinarytextOutput: '',
      BinaryCP1251Output: ''

    }

  },

  methods: {
    copy(str) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(str)
          .then(function () {
            console.log("Текст скопирован в буфер обмена");
          })
          .catch(function (err) {
            console.error("Не удалось скопировать текст: ", err);
          });
      } else {
        console.error("Ваш браузер не поддерживает Clipboard API");
      }

    },
    convertToText() {
      const str = document.getElementById('CP1251Input').value
      console.log(str)

      const win1251decoder = new TextDecoder("windows-1251");
      const bytes = new Uint8Array(str.split(' ').map(Number));

      this.textOutput = win1251decoder.decode(bytes)

      console.log(win1251decoder.decode(bytes)); // Привет, мир!

      const encoder = new TextEncoder();
      const view = encoder.encode(encoder.encode("Привет, мир!"));
      console.log(view);
    },
    CP12512Text(str) {
      /*       let CP1251Input = windows1251.encode(str);
            let CP1251String = CP1251Input.toString();
            let CP1251Output = CP1251String.replace(/,/g, ' '); */
      const win1251decoder = new TextDecoder("windows-1251");
      const bytes = new Uint8Array(str.split(' ').map(Number));
      let textOutput = win1251decoder.decode(bytes)
      return textOutput

    },
    convertToCP1251() {
      this.textInput = document.getElementById('textInput').value;
      let textInput = this.textInput;

      // Assuming that `windows1251.encode` returns an array or buffer
      let CP1251Output = windows1251.encode(textInput);

      // Convert the array or buffer to a string
      let CP1251String = CP1251Output.toString();

      // Replace commas with spaces
      this.CP1251Output = CP1251String.replace(/,/g, ' ');

      // Split the string into an array
      let decimalArray = this.CP1251Output.split(" ").map(Number);

      // Convert decimal to binary and join into a string
      let binaryString = decimalArray.map(decimalNumber =>
        decimalNumber.toString(2).padStart(8, '0')
      ).join(" ");

      this.CP1251_BinaryOutput = binaryString;

    },
    Binary2Text2CP1251() {
      this.binaryInput = document.getElementById('BinaryInput').value;
      let binaryInput = this.binaryInput.replace(/\s/g, ''); // Убираем пробелы

      // Разбиваем строку на последовательности по 8 бит
      let binarySequences = binaryInput.match(/.{8}/g);

      // Преобразуем каждую последовательность в десятичное число
      let decimalResults = binarySequences.map(sequence => parseInt(sequence, 2));

      this.BinaryCP1251Output = decimalResults.join(' ')
      console.log(decimalResults);
      this.BinarytextOutput = this.CP12512Text(this.BinaryCP1251Output)

    },
    Demical2Binary() {

    },
    Binary2Demical() {

    }
  },


}


</script>

<style scoped>
#input {}
</style>
