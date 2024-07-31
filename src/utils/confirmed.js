import {watch} from "vue";
import {isConfirm, isOpenConfirm} from "@/store/confirm";

export function confirmed(callback, ...data) {
    isOpenConfirm.value = true

    const stopConfirmWatch = watch(isConfirm, () => {
        callback(...data)

        stopConfirmWatch()
        isOpenConfirm.value = false
    })

    const stopConfirmedDialogWatch = watch(isOpenConfirm, () => {
        stopConfirmWatch()
        stopConfirmedDialogWatch()

        isConfirm.value = false
    })
}
