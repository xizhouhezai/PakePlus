import{l as t,m as o}from"./index-C4AMdMz2.js";function u(e){return t({url:"/promotion/coupon",method:o.GET,needToken:!0,params:e})}function i(e){return t({url:"/promotion/pintuan",method:o.GET,needToken:!0,params:e})}function a(e,n){return t({url:`/promotion/pintuan/status/${e}`,method:o.PUT,needToken:!0,params:n})}function d(e){return t({url:"/broadcast/studio",method:o.GET,needToken:!0,params:e})}function s(e){return t({url:"/broadcast/commodity",method:o.GET,needToken:!0,params:e})}function l(e){return t({url:"/promotion/full-discount",method:o.GET,needToken:!0,params:e})}function c(e){return t({url:"/distribution/goods/page",method:o.GET,needToken:!0,params:e})}function m(){return t({url:"/distribution/setting",method:o.GET,needToken:!0})}function p(e){return t({url:"/distribution/setting",method:o.PUT,needToken:!0,params:e})}function T(e){return t({url:"/distribution/order/manager/page",method:o.GET,needToken:!0,params:e})}function f(e){return t({url:"/promotion/seckill",method:o.GET,needToken:!0,params:e})}function h(e){return t({url:"/promotion/coupon-activity",method:o.GET,needToken:!0,params:e})}function k(e){return t({url:"/promotion/haggle",method:o.GET,needToken:!0,params:e})}function g(e){return t({url:`/promotion/haggle/${e}`,method:o.DELETE,needToken:!0})}function E(e){return t({url:"/promotion/points",method:o.GET,needToken:!0,params:e})}function G(e){return t({url:`/promotion/points/${e}`,method:o.DELETE,needToken:!0})}function P(){return t({url:"/promotion/points/category",method:o.GET,needToken:!0})}function y(e){return t({url:`/promotion/points/category/${e}`,method:o.DELETE,needToken:!0})}function D(e){return t({url:"/promotion/points/category",method:o.POST,needToken:!0,data:e})}function $(e){return t({url:"/promotion/points/category",method:o.PUT,needToken:!0,data:e})}function L(e){return t({url:"/promotion/coupon/status",method:o.PUT,needToken:!0,params:e})}function S(e){return t({url:`/promotion/coupon/${e}`,method:o.DELETE,needToken:!0})}function C(e){return t({url:"/promotion/coupon-activity",method:o.POST,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function v(e){return t({url:`/promotion/coupon-activity/${e}`,method:o.GET,needToken:!0})}function U(e){return t({url:`/promotion/coupon-activity/${e}`,method:o.DELETE,needToken:!0})}function b(e){return t({url:`/promotion/full-discount/${e}`,method:o.GET,needToken:!0})}function j(e){return t({url:`/promotion/full-discount/status/${e}`,method:o.PUT,needToken:!0})}function A(e,n){return t({url:`/promotion/seckill/${e}`,method:o.GET,needToken:!0,params:n})}function I(e){return t({url:"/promotion/seckill",method:o.PUT,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function O(e){return t({url:"/promotion/seckill/apply",method:o.GET,needToken:!0,params:e})}function R(e){return t({url:`/promotion/seckill/apply/${e.seckillId}/${e.id}`,method:o.DELETE,needToken:!0})}function B(e){return t({url:`/promotion/seckill/status/${e}`,method:o.PUT,needToken:!0})}function J(){return t({url:"/promotion/seckill/init",method:o.GET,needToken:!0})}function K(e){return t({url:"/promotion/seckill/apply/audit",method:o.PUT,needToken:!0,data:e,headers:{"Content-type":"application/json"}})}function F(e){return t({url:`/system/setting/get/${e}`,method:o.GET,needToken:!0})}function q(e,n){return t({url:`/system/setting/put/${e}`,method:o.PUT,needToken:!0,data:n})}function w(e){return t({url:`/promotion/pintuan/${e}`,method:o.GET,needToken:!0})}function x(e){return t({url:`/promotion/pintuan/goods/${e.pintuanId}`,method:o.GET,needToken:!0})}function M(e){return t({url:"/promotion/haggle",method:o.POST,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function z(e){return t({url:`/promotion/haggle/${e}`,method:o.GET,needToken:!0})}function H(e){return t({url:"/promotion/haggle",method:o.PUT,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function N(e){return t({url:`/broadcast/studio/recommend/${e.id}`,method:o.PUT,needToken:!0,params:e})}function Q(e){return t({url:`/broadcast/studio/${e}`,method:o.GET,needToken:!0})}function V(e){return t({url:"/promotion/points",method:o.POST,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function W(e){return t({url:`/promotion/points/status/${e}`,method:o.PUT,needToken:!0})}function X(e){return t({url:"/promotion/points",method:o.PUT,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function Y(e){return t({url:`/promotion/points/${e}`,method:o.GET,needToken:!0})}function Z(e){return t({url:"/promotion/coupon/received",method:o.GET,needToken:!0,params:e})}function _(e){return t({url:"/user/member/sign",method:o.GET,needToken:!0,params:e})}function ee(e){return t({url:"/promotion/minus",method:o.GET,needToken:!0,params:e})}function te(e){return t({url:"/promotion/minus",method:o.POST,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function oe(e){return t({url:"/promotion/minus",method:o.PUT,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function ne(e){return t({url:`/promotion/minus/${e}`,method:o.GET,needToken:!0})}function re(e,n){return t({url:`/promotion/minus/status/${e}`,method:o.PUT,needToken:!0,params:n})}function ue(e){return t({url:`/promotion/minus/${e}`,method:o.DELETE,needToken:!0})}function ie(e){return t({url:"/promotion/raffle",method:o.GET,needToken:!0,params:e})}function ae(e){return t({url:"/promotion/raffle/logs/page",method:o.GET,needToken:!0,params:e})}function de(e){return t({url:"/promotion/raffle",method:o.POST,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function se(e){return t({url:"/promotion/raffle",method:o.PUT,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function le(e){return t({url:`/promotion/raffle/${e}`,method:o.GET,needToken:!0})}function ce(e,n){return t({url:`/promotion/raffle/status/${e}`,method:o.PUT,needToken:!0,params:n})}function me(e){return t({url:`/promotion/raffle/${e}`,method:o.DELETE,needToken:!0})}function pe(e){return t({url:"/promotion/gift",method:o.GET,needToken:!0,params:e})}function Te(e){return t({url:`/promotion/gift/${e}`,method:o.GET,needToken:!0})}function fe(e){return t({url:"/promotion/gift",method:o.POST,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function he(e){return t({url:"/promotion/gift",method:o.PUT,needToken:!0,data:e,headers:{"Content-Type":"application/json"}})}function ke(e,n){return t({url:`/promotion/gift/status/${e}`,method:o.PUT,needToken:!0,params:n})}function ge(e){return t({url:`/promotion/gift/${e}`,method:o.DELETE,needToken:!0})}export{me as $,ge as A,ke as B,P as C,$ as D,D as E,y as F,E as G,G as H,W as I,V as J,Y as K,X as L,s as M,d as N,N as O,Q as P,ee as Q,ue as R,re as S,ne as T,te as U,oe as V,i as W,a as X,x as Y,w as Z,ie as _,f as a,ce as a0,le as a1,de as a2,se as a3,ae as a4,B as a5,F as a6,q as a7,J as a8,A as a9,I as aa,R as ab,K as ac,_ as ad,M as b,z as c,S as d,H as e,k as f,u as g,g as h,v as i,C as j,h as k,U as l,Z as m,c as n,T as o,m as p,p as q,b as r,O as s,l as t,L as u,j as v,Te as w,fe as x,he as y,pe as z};
