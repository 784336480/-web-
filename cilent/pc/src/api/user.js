import req from '../utils/http'

//注册接口
export const REGISTERCHECKUSER=params=>req('post','/user/register/checkuser',params);
export const REGISTERCHECKTEl=params=>req('post','/user/register/checktel',params);
export const REGISTER=params=>req('post','/user/register',params);

//登录接口
export const LOGINCHECKUSER=params=>req('post','/user/login/checkuser',params);
export const LOGIN=params=>req('post','/user/login',params);


