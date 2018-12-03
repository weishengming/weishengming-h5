<template>
  <div class="home">
    <x-cell-group>
      <x-field
              v-model="username"
              required
              clearable
              label="用户名"
              icon="question"
              placeholder="请输入用户名"
              @click-icon="$toast('question')"
      />
      <x-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
      />
    </x-cell-group>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
