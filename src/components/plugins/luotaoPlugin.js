export default {
    install(Vue){
        Vue.prototype.checkUserName=(value) => {
            if (value=="") return true;
            if (value.length > 6){
                return true;
            }
            return false;
        }
        Vue.directive('uname', {
            // 当被绑定的元素插入到 DOM 中时……
            bind(){
                console.log('begin');
            },
            update(el,binding,vnode){
               /* if (el.value.length == 0) {
                    vnode.context['showErrorLabel'] = false;
                }else if (el.value.length < 6){
                    vnode.context['showErrorLabel'] = true;
                }else {
                    vnode.context['showErrorLabel'] = false;
                }*/
               //业务代码卸载组件里
                vnode.context[binding.expression]();
            }
        })
    }

}