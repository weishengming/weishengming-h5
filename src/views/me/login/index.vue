<template>
    <div id="login">
        <x-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />

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

        <!--<x-button type="default" @click="login">登录</x-button>-->

    </div>
    
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            // login(){
            //     let params = {
            //         // contentType:"application/x-www-form-urlencoded",
            //         url:this.$api.login,
            //         method:"get",
            //         data:{
            //             version: '1.9.0',
            //             language:'en',
            //             mailOrphone: this.$des.encrypt(this.$desKey(), this.username, this.$desVi()),
            //             password: this.$des.encrypt(this.$desKey(), this.password, this.$desVi()),
            //             type:'40'
            //
            //         }
            //     }
            //     let loginPromise = this.$req(params)
            //     loginPromise.then(res=>{
            //         let {data,errorCode,message} = res
            //         if(errorCode==0){
            //             console.log(data)
            //         }else{
            //             this.$toast(message)
            //         }
            //     },err=>{
            //         console.log(err)
            //     })
            //
            //     console.log(this.$desKey()+"--->"+this.$desVi());
            //     console.log(this.$des.encrypt(this.$desKey(), this.password, this.$desVi()));
            //
            // }
        }
    }
</script>

<style scoped>

</style>