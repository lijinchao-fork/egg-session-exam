

# 说明

* 访问http://127.0.0.1:7001/session1 在service中设置session＝{session:"1"}
* 访问http://127.0.0.1:7001/session2 在service中设置session＝{session:"2"}
* 访问http://127.0.0.1:7001/session 查看真正的session，发现按照以上的顺序改变session，结果依然是{session:"1"}