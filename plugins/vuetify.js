import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
})
// メモ
// https://github.com/Templarian/MaterialDesign/issues/4576
// analyzeモードでbuildのテストをすると1.6Mbもデータがあるが、productionではtree shakingが現状の書き方で動くみたい
