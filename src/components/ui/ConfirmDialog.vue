<script setup>
    import {isConfirm, isOpenConfirm} from "@/store/confirm";
    
    const isOpen = isOpenConfirm
</script>

<template>
    <teleport to="body">
        <div class="dialog-wrapper" v-if="isOpen">
            <div class="dialog-body">
                <div>
                    Вы увкерены?
                </div>
                <button @click="isConfirm = true">Да</button>
                <button @click="isOpen = false">Нет</button>
            </div>
        </div>
    </teleport>
</template>

<style scoped>
.dialog-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    background: rgba(117, 142, 166, 0.6);
}

.dialog-body {
    background: white;
    padding: 20px;
}
</style>
