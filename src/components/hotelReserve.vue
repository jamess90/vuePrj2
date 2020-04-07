<template>
    <div>teste</div>
</template>

<script>
    export default {
        name: 'hotelReserve',
        created() {
            this.$store.state.pageName = 'hotelReserve'
            this.$store.state.hotelNum = this.$route.params.hotelNum
        },
    }
</script>