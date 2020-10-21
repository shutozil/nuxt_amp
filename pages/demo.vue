<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div v-if="$isAMP">
        <amp-img
          src="/vuetify-logo.svg"
          layout="responsive"
          width="266"
          height="150"
        ></amp-img>
        <p>This is AMP</p>
      </div>
      <div v-else>
        <div class="text-center">
          <img src="/vuetify-logo.svg" width="266" height="150" />
        </div>
        <p>This is nomal view</p>
      </div>
      <v-card>
        <v-card-title class="headline">
          ⚡ Welcome to the Vuetify + Nuxt.js + AMP
        </v-card-title>
        <v-card-text> <p>AMP x Nuxtのデモページです。</p></v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  amp: 'hybrid',
  ampLayout: 'default.amp', // ampの時にlayoutが変わる

  head() {
    return {
      title: 'AMP - DEMO',
      titleTemplate: '',
    }
  },
}
</script>
