<template>
    <div id="login">
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
                console.log(this.userName+">>><<<"+this.password);
                let params = {
                    url:this.$api.register,
                    method:'post',
                    data:{
                        userName:this.userName,
                        password:this.password
                    }
                }
                let registerPromise = this.$req(params)
                registerPromise.then()
            }
        }
    }
</script>

<style scoped>

</style>