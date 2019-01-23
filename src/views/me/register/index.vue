<template>
    <div id="register">
        <x-nav-bar
                :title="$t('regester.regesterTitle')"
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

        <x-button type="default" @click="register" >{{$t('me.Regist')}}</x-button>

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
            register(){
                let params = {
                    url:this.$api.register,
                    method:'post',
                    data:{
                        userName:this.userName,
                        password:this.password
                    }
                }
                let registerPromise = this.$req(params)
                registerPromise.then(res=>{
                    let {msg,code,data} = res
                    if(code=='200'){
                        // this.SET_CASE(data)
                        this.$router.push('/me/login')
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