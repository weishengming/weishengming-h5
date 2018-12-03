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
                    v-model="username1"
                    required
                    clearable
                    :label="$t('me.userName')"
                    icon="question"
                    :placeholder="$t('me.inputUserName')"
                    @click-icon="$toast($t('me.inputPhoneOrEmail'))"
            />

            <x-field
                    v-model="password1"
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
    import axios from 'axios'
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.baseURL = 'http://localhost:9801';
    export default {
        name: "index",
        data(){
            return {
                username1:'',
                password1:''
            }
        },
        methods:{

            register(){
                let params = new URLSearchParams();
                params.append('username', "'"+this.username1+"'");       //你要传给后台的参数值 key/value
                params.append('password', "'"+this.password1+"'");
                axios({
                    url:this.$api.register,
                    method:'post',
                    data:params
                }).then(

                )
            }
        }
    }
</script>

<style scoped>

</style>