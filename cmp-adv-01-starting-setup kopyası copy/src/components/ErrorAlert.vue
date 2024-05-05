<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>


<style scoped>
dialog {
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: rgb(236, 69, 69);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 30;
    
}
</style>