<template>
    <div class="not-implemented">
        <strong>{{ $t('not_implemented') }}</strong>
        <v-btn @click='$router.back'>{{ $t('go_back') }}</v-btn>
    </div>
</template>
  
<script>
export default {
    name: 'NotImplemented',
};
</script>
  
<style scoped>
.not-implemented {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: xx-large;
    color: crimson
}
</style>
  