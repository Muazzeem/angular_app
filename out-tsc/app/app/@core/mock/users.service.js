import { __decorate } from "tslib";
import { of as observableOf } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../data/users';
let UserService = class UserService extends UserData {
    constructor() {
        super(...arguments);
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
        };
        this.contacts = [];
        this.recentUsers = [];
    }
    getUsers() {
        return observableOf(this.users);
    }
    getContacts() {
        return observableOf(this.contacts);
    }
    getRecentUsers() {
        return observableOf(this.recentUsers);
    }
};
UserService = __decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=users.service.js.map