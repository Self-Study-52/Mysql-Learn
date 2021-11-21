"use strict";(self.webpackChunkMysql_Learn=self.webpackChunkMysql_Learn||[]).push([[420],{2982:(e,a,t)=>{t.r(a),t.d(a,{data:()=>r});const r={key:"v-8c1276d2",path:"/guide/%E3%80%8A%E9%AB%98%E6%80%A7%E8%83%BDMysql%E3%80%8B/%E9%99%84%E5%BD%95A-Mysql%E5%85%B3%E9%94%AE%E8%AF%8D%E7%90%86%E8%A7%A3.html",title:"附录A-Mysql关键词理解",lang:"en-US",frontmatter:{title:"附录A-Mysql关键词理解",lang:"en-US"},excerpt:"",headers:[{level:2,title:"脏读（Dirty Read）",slug:"脏读-dirty-read",children:[]},{level:2,title:"不可重复读（nonrepeatable read）",slug:"不可重复读-nonrepeatable-read",children:[]},{level:2,title:"幻读（Phantom Read）",slug:"幻读-phantom-read",children:[]}],filePathRelative:"guide/《高性能Mysql》/附录A-Mysql关键词理解.md",git:{updatedTime:163603258e4,contributors:[{name:"Sue-52",email:"1219243947@qq.com",commits:1}]}}},2918:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const r=(0,t(6252).uE)('<h1 id="附录a-mysql关键词理解" tabindex="-1"><a class="header-anchor" href="#附录a-mysql关键词理解" aria-hidden="true">#</a> 附录A-Mysql关键词理解</h1><h2 id="脏读-dirty-read" tabindex="-1"><a class="header-anchor" href="#脏读-dirty-read" aria-hidden="true">#</a> 脏读（Dirty Read）</h2><p>A事务读取B事务尚未提交的数据，此时如果B事务发生错误并执行回滚操作，那么A事务读取到的数据就是脏数据。就好像原本的数据比较干净、纯粹，此时由于B事务更改了它，这个数据变得不再纯粹。这个时候A事务立即读取了这个脏数据，但事务B良心发现，又用回滚把数据恢复成原来干净、纯粹的样子，而事务A却什么都不知道，最终结果就是事务A读取了此次的脏数据，称为脏读。</p><p>这种情况常发生于转账与取款操作中：</p><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202111042104619.png" alt="image-20211104210424569"></p><h2 id="不可重复读-nonrepeatable-read" tabindex="-1"><a class="header-anchor" href="#不可重复读-nonrepeatable-read" aria-hidden="true">#</a> 不可重复读（nonrepeatable read）</h2><p>事务A在执行读取操作，由整个事务A比较大，前后读取同一条数据需要经历很长的时间 。而在事务A第一次读取数据，比如此时读取了小明的年龄为20岁，事务B执行更改操作，将小明的年龄更改为30岁，此时事务A第二次读取到小明的年龄时，发现其年龄是30岁，和之前的数据不一样了，也就是数据不重复了，系统不可以读取到重复的数据，成为不可重复读。</p><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202111042106549.png" alt="image-20211104210645517"></p><h2 id="幻读-phantom-read" tabindex="-1"><a class="header-anchor" href="#幻读-phantom-read" aria-hidden="true">#</a> 幻读（Phantom Read）</h2><p>事务A在执行读取操作，需要两次统计数据的总量，前一次查询数据总量后，此时事务B执行了新增数据的操作并提交后，这个时候事务A读取的数据总量和之前统计的不一样，就像产生了幻觉一样，平白无故的多了几条数据，成为幻读。</p><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202111042108528.png" alt="image-20211104210825495"></p>',11),d={},n=(0,t(3744).Z)(d,[["render",function(e,a){return r}]])},3744:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,r]of a)t[e]=r;return t}}}]);