<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>


<script>
export default {
    props : ['title']
}
</script>


<style scoped>
header{
    background-color: #750404;
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,.1);
}

h1{
    font-size: 36px;
    color:white;
}
</style>