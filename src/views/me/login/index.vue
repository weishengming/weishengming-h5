<template>
    <div id="login">
        <x-nav-bar
                :title="$t('logins.loginTitle')"
                :left-text="$t('common.returnBack')"
                left-arrow
                @click-left="$router.back(-1)"
        />

        <x-cell-group>
            <x-field
                    v-model="userName"
                    required
                    clearable
                    :label="$t('me.userName')"
                    icon="question"
                    :placeholder="$t('me.inputUserName')"
                    @click-icon="$toast($t('me.inputPhoneOrEmail'))"
            />

            <x-field
                    v-model="password"
                    type="password"
                    :label="$t('me.password')"
                    :placeholder="$t('me.inputPassword')"
                    required
            />
        </x-cell-group>

        <x-button type="default" @click="login" >{{$t('me.LogIn')}}</x-button>

    </div>

</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                userName:'',
                password:''
            }
        },
        methods:{
            login(){
                let params = {
                    url:this.$api.login,
                    method:'get',
                    data:{
                        userName:this.userName,
                        password:this.password
                    }
                }
                let loginPromise = this.$req(params)
                loginPromise.then(res=>{
                    let {msg,code,data} = res
                    if(code=='200'){
                        // this.SET_CASE(data)
                        this.$router.push('/me')
                    }else{
                        console.log(msg)
                        this.$toast(msg)
                    }
                },err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>