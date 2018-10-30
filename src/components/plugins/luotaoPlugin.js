export default {
    install(Vue){
        //验证文本框，自带组件
        Vue.component("shenyi-text",{
            template:" <div><input type='text' class='form-control'  v-model='textValue'/>" +
            "<label v-if='showErrorLable' class='label label-danger'>用户名不合法</label></div>",
            data(){
                return {
                    textValue:""
                }
            },
            computed:{
                showErrorLable()
                {
                    if(/\w{6,20}/.test(this.textValue) || this.textValue=="") {
                        return false;
                    }
                    return true;
                }
            }
        });
        Vue.prototype.checkUserName=(value) => {
            if (value=="") return true;
            if (value.length > 6){
                return true;
            }
            return false;
        };
        Vue.prototype.errorLabel = null;
        Vue.prototype.hashError = false;
        Vue.directive('uname', {
            // 当被绑定的元素插入到 DOM 中时……
            bind(){
                console.log('begin');
                let error = Vue.extend({
                    template: '<label class="label label-danger">用户名不合法</label>'
                });
                Vue.errorLabel = (new error).$mount().$el;
            },
            update(el,binding,vnode){
               if (el.value.length == 0) {
                    vnode.context['showErrorLabel'] = false;
                }else if (el.value.length < 6){
                    vnode.context['showErrorLabel'] = true;
                    if (!Vue.hashError){
                        el.parentNode.appendChild(Vue.errorLabel);
                        Vue.hashError = true;
                    }

                }else {
                    vnode.context['showErrorLabel'] = false;
                    if(Vue.hashError){
                        el.parentNode.removeChild(Vue.errorLabel);
                        Vue.hashError = false;
                    }
                }
               //业务代码卸载组件里
                //vnode.context[binding.expression]();
            }
        })
    }

}