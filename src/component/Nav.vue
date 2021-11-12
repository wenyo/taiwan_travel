<template>
  <nav class="contain">
    <h1>
      <img src="@/assets/img/logo.svg" alt="台灣旅遊景點導覽" />
      <div>Taiwain Travel 台灣旅遊景點導覽</div>
    </h1>
    <ul>
      <li>
        <img src="@/assets/img/item1.svg" alt="台灣景點" />
        <span>台灣景點</span>
      </li>
      <li>
        <img src="@/assets/img/item2.svg" alt="美食住宿" />
        <span>美食住宿</span>
      </li>
      <li>
        <img src="@/assets/img/item3.svg" alt="景點交通" />
        <span>景點交通</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $basic-color-white;
}

h1 {
  display: inline-block;
  width: 100px;

  img {
    width: 100%;
  }

  div {
    display: none;
  }
}

ul {
  display: flex;
  font-size: 14px;

  li {
    display: flex;
    align-items: center;
    margin-left: 27px;
    text-decoration: underline;

    &:first-child {
      color: $primary-color-master;
    }
    &:nth-child(2) {
      color: $primary-color-second;
    }
    &:nth-child(3) {
      color: $primary-color-third;
    }
  }

  img {
    height: 34px;
    margin-right: 8px;
  }
}
</style>
