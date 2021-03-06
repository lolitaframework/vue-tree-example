(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=vue-tree-example.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[(!_vm.isFolder)?_c('div',{class:_vm.cssClass,domProps:{"innerHTML":_vm._s(_vm.model.name)}}):_vm._e(),_vm._v(" "),(_vm.isFolder)?_c('div',{staticClass:"folder",class:_vm.cssClass,domProps:{"innerHTML":_vm._s(_vm.prepareFolderNameFunc(_vm.model.name, _vm.open))},on:{"click":_vm.toggle}}):_vm._e(),_vm._v(" "),(_vm.isFolder)?_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}]},_vm._l((_vm.model.children),function(model,index){return _c('VueTreeExample',{key:index,staticClass:"item",attrs:{"model":model,"prepareFolderNameFunc":_vm.prepareFolderNameFunc}})})):_vm._e()])},staticRenderFns: [],_scopeId: 'data-v-53b1f5fb',
  name: 'VueTreeExample',
  props: {
    model: Object,
    prepareFolderNameFunc: {
      type: Function,
      default: function(name, open) {
        return open ? ("[-] " + name) : ("[+] " + name);
      },
    },
  },
  data: function data() {
    return {
      open: false,
    };
  },
  computed: {
    isFolder: function isFolder() {
      return this.model.children && this.model.children.length;
    },
    isFirstChildrenFolder: function isFirstChildrenFolder() {
      if (this.model.children instanceof Array && this.model.children.length) {
        return this.model.children[0].children instanceof Array && this.model.children[0].children.length;
      }
      return false;
    },
    cssClass: function cssClass() {
      var cssClasses = this.model.class ? this.model.class : {};
      if (this.isFolder) {
        return Object.assign(
          cssClasses,
          {
            'is-open': this.open,
            'first-children-is-folder': this.isFirstChildrenFolder,
          }
        );
      }
      return cssClasses;
    },
  },
  methods: {
    toggle: function toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  },
};

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VueTreeExample', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
export { install };
