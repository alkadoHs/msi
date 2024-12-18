<?php

namespace App\Enums\Enums;

enum PermissionsEnum
{
    const string CREATE_USER = 'create user';
    const string UPDATE_USER = 'update user';
    const string DELETE_USER = 'delete user';
    const string VIEW_USER = 'view user';
    const string CREATE_CUSTOMER = 'create customer';
    const string UPDATE_CUSTOMER = 'update customer';
    const string DELETE_CUSTOMER = 'delete customer';
    const string VIEW_CUSTOMER = 'view customer';
    const string CREATE_PRODUCT = 'create product';
    const string UPDATE_PRODUCT = 'update product';
    const string DELETE_PRODUCT = 'delete product';
    const string VIEW_PRODUCT = 'view product';
    const string CREATE_ORDER = 'create order';
    const string UPDATE_ORDER = 'update order';
    const string DELETE_ORDER = 'delete order';
    const string VIEW_ORDER = 'view order';
    const string CREATE_SUPPLIER = 'create supplier';
    const string UPDATE_SUPPLIER = 'update supplier';
    const string DELETE_SUPPLIER = 'delete supplier';
    const string VIEW_SUPPLIER = 'view supplier';
}
