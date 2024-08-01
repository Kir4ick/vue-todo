<script setup>
    import {isConfirm, isOpenConfirm} from "@/store/confirm";
    
    const isOpen = isOpenConfirm
</script>

<template>
    <teleport to="body">
        <div class="dialog-wrapper" v-if="isOpen" @click.self="isOpen = false">
            <div class="dialog-body">
                <div>
                    Вы уверены?
                </div>
                <div class="buttons-wrapper">
                    <button class="save-button" @click="isConfirm = true">Да</button>
                    <button class="danger-button" @click="isOpen = false">Нет</button>
                </div>
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

.buttons-wrapper {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}
</style>
