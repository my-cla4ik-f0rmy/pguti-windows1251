<script setup>
import app from './components/programm.vue'
import '@material/web/all'
</script>
<template>
  <Header></Header>
  <div class="programm">
    <md-list>
      <md-list-item>
        <h1 style="overflow: visible;">Windows-1251 | 🌀ПГУТИ</h1>
        <h4>Сайт для выполнения практических и лабораторных работ в ПГУТИ</h4>
        Позволяет переводить:
        <ul>
          <li>Windows-1251 в текст</li>
          <li>Текст в Windows-1251 и двоичный код*</li>
          <li>Двоичный код* в текст и Windows-1251</li>
        </ul>
        <blockquote>*Двоичный код это перевод числа Windows-1251 из десятичной в двоичную систему счисления</blockquote>
      </md-list-item>
    </md-list>

    <app></app>
  </div>
</template>


