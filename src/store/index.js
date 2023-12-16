import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: [
      { u_name: "Raghu", pass: "Raghu123", role: "Manager" },
      { u_name: "Tom", pass: "Tom123", role: "Biller" },
      { u_name: "Alan", pass: "Alan123", role: "SystemAdmin" },
      { u_name: "J", pass: "123", role: "Inventry" },
    ],

    m_master: [
      { m_name: "Aspirin", brand: "Eco" },
      { m_name: "Dolo", brand: "Paracetomal" },
      { m_name: "Vicks500", brand: "Ecospirin" },
      { m_name: "Analgin", brand: "Ecospirin" },
    ],

    Stock: [
      { m_name: "Aspirin", qty: 70, unit_price: 5 },
      { m_name: "Dolo", qty: 80, unit_price: 7 },
      { m_name: "Vicks500", qty: 100, unit_price: 3 },
      { m_name: "Analgin", qty: 150, unit_price: 2 },
    ],

    Login_history: [
      { u_name: "Raghu", type: "Login", date: "2023-04-04" },
      { u_name: "Raghu", type: "Logout", date: "2023-04-05" },
      { u_name: "Jerry", type: "Login", date: "2023-04-11" },
      { u_name: "Jerry", type: "Logout", date: "2023-04-12" },
      { u_name: "Jerry", type: "Logout", date: "2023-04-12" },

      { u_name: "Jerry", type: "Logout", date: "2023-04-12" },

    ],

    Bill_Master: [
      {
        bill_no: 23,
        bill_date: "2023-04-06",
        billgst: 13.3,
        net_price: 86,
        user_id: "Tom",
      },
      {
        bill_no: 56,
        bill_date: "2023-04-21",
        billgst: 5.3,
        net_price: 56,
        user_id: "Tom",
      },
      {
        bill_no: 523,
        bill_date: "2023-04-23",
        billgst: 36,
        net_price: 200,
        user_id: "Tom",
      },
      {
        bill_no: 32,
        bill_date: "2023-04-12",
        billgst: 18,
        net_price: 100,
        user_id: "Tom",
      },
      {
        bill_no: 578,
        bill_date: "2023-05-02",
        billgst: 30.23,
        net_price: 160,
        user_id: "Tom",
      },
      {
        bill_no: 234,
        bill_date: "2023-05-03",
        billgst: 36,
        net_price: 150,
        user_id: "Tom",
      },
    ],

    Bill_Details: [
      { bill_no: 23, m_name: "Aspirin", qty: 5, unit_price: 5, amount: 25 },
      { bill_no: 56, m_name: "Dolo", qty: 10, unit_price: 7, amount: 70 },
      { bill_no: 523, m_name: "Vicks500", qty: 2, unit_price: 3, amount: 6 },
      { bill_no: 32, m_name: "Analgin", qty: 7, unit_price: 5, amount: 35 },
      { bill_no: 234, m_name: "Analgin", qty: 9, unit_price: 5, amount: 45 },

    ],
    // userRole:""
    User:{}
  },
  mutations: {
    store_arr(state, add) {
      state.login.push(add);
    },
    set(state, ad_med) {
      state.m_master.push(ad_med);
    },
    set_stock(state, stock) {
      state.Stock.push(stock);
      // stock={}
    },
    set_log(state, log) {
      state.Login_history.push(log);
    },
    set_logout(state, str) {
      state.Login_history.push(str);
    },
    bill_dt(state, str_add) {
      state.Bill_Details.push(str_add);
    },
    bill_mas(state, str_sav) {
      state.Bill_Master.push(str_sav);
    },
    // setRole(state,val){
    //   state.userRole = val
    // },
    // set_use(state,use){
    //   state.User=use;
    // }
  },
  actions: {},
  modules: {},
});
