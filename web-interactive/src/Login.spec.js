import { mount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import { expect } from 'chai';
import sinon from 'sinon';

const mockUserData = {
    id: 123,
    username: 'eve.holt',
    email: 'eve.holt@reqres.in',
};

describe('Login.vue', () => {

    it('should have the correct default data', () => {
        const wrapper = mount(Login);

        expect(wrapper.vm.loginForm.email).to.equal("eve.holt@reqres.in");
        expect(wrapper.vm.loginForm.password).to.equal("cityslicka");
    });

    it('should call the login method on button click', async () => {
        const wrapper = mount(Login);

        const loginSpy = sinon.spy(wrapper.vm, 'login');

        await wrapper.setData({
            loginForm: {
                email: 'eve.holt@reqres.com',
                password: 'cityslicka',
            },
        });

        await wrapper.find('button').trigger('click');

        expect(loginSpy.called).to.be.true;

        loginSpy.restore();
    });

    it('should redirect to /pemesanan after successful login', async () => {
        const wrapper = mount(Login);

        const mockResponse = {
            status: 200,
            data: mockUserData,
        };
        sinon.stub(wrapper.vm.$axios, 'post').resolves(mockResponse);

        await wrapper.find('button').trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$route.path).to.equal('/pemesanan');

        wrapper.vm.$axios.post.restore();
    });

});
