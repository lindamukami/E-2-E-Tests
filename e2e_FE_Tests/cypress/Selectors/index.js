export const QE_TEST_PAGES = {
    FILTER_TEST : {
        PRODUCT_ELECTRONIC : '.container-fluid .d-flex :nth-child(2) img',
        ITEM_ELECTRONIC : '.row :nth-child(1) h5',
        PRODUCT_FASHION : '.container-fluid .d-flex :nth-child(3) img',
        ITEM_FASHION : '.row :nth-child(1) h5'

    },
    SEARCH_TEST : {
        SEARCH_FIELD : '.form-group input',
        SEARCH_RESULT : '.row :nth-child(1) h5'
    },
    ADD_SINGLE_TEST : {
        ITEM_ONE : '.col-md-3:nth-child(1) button.btn.btn-primary',
        CART : '.shadow-sm button.btn.btn-primary',
        ITEM_NAME_ADDED : '.table-responsive  tbody tr:nth-child(1) td:nth-child(2)',
        CART_0 : '.btn-primary .bg-danger',
        SHOP_NOW : '.center button'
    },
    REMOVE_SINGLE_TEST :{
        REMAIN_CART : '.table-responsive  tbody tr:nth-child(1) td:nth-child(2)',
        REMOVE_ONE :'.table-responsive  tbody tr:nth-child(1) .btn-danger'
    },

    ADD_MULTIPLE_TEST : {
        CART_0 : '.btn-primary .bg-danger',
        SHOP_NOW : '.center button',
        ITEM_ONE : '.col-md-3:nth-child(1) button.btn.btn-primary',
        ITEM_TWO : '.col-md-3:nth-child(2) button.btn.btn-primary',
        ITEM_THREE : '.col-md-3:nth-child(3) button.btn.btn-primary',
        CART : '.shadow-sm button.btn.btn-primary',
        LIST_PRODUCT : '.table-responsive  tbody tr td:nth-child(1)',
        FIRST_PRODUCT : '.table-responsive  tbody tr:nth-child(1) td:nth-child(1)',
        LAST_PRODUCT: '.table-responsive  tbody tr:nth-child(4) td:nth-child(1)',
        CART_3 : '.btn-primary .bg-danger'

    },
    REMOVE_MULTIPLE_TEST : {
        REMOVE_CART :'.table-responsive  tbody tr:nth-child(4) .btn-danger',
        EMPTY_CART : '.center h4'
    }
}