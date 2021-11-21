"use strict";(self.webpackChunkMysql_Learn=self.webpackChunkMysql_Learn||[]).push([[417],{1290:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-79f8d54e",path:"/guide/%E3%80%8AMysql%E5%BF%85%E7%9F%A5%E5%BF%85%E4%BC%9A%E3%80%8B/%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%EF%BC%9A%E5%88%9B%E5%BB%BA%E9%AB%98%E7%BA%A7%E8%81%94%E7%BB%93.html",title:"第十五章：创建高级联结",lang:"en-US",frontmatter:{title:"第十五章：创建高级联结",lang:"en-US"},excerpt:"",headers:[],filePathRelative:"guide/《Mysql必知必会》/第十五章：创建高级联结.md",git:{updatedTime:1635847604e3,contributors:[{name:"Sue-52",email:"1219243947@qq.com",commits:1}]}}},7518:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});const a=(0,n(6252).uE)('<h1 id="第十五章-创建高级联结" tabindex="-1"><a class="header-anchor" href="#第十五章-创建高级联结" aria-hidden="true">#</a> 第十五章：创建高级联结</h1><p>别名除了用于列名和计算字段外，SQL还允许给表名起别名。这样做有两个主要理由：</p><ul><li>缩短 SQL 语句</li><li>允许在单条SELECT语句中多次使用相同的表。</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT cust_name,cust_contact\nFROM customers c ,orders o ,orderitems o2 \nWHERE c.cust_id = o.cust_id \nAND o2.order_num = o.order_num \nAND prod_id = &quot;TNT2&quot;;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>甚至可以将 as 省略。</p></blockquote><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202110292229061.png" alt="image-20211021171049271"></p><p>应该注意，表别名只在查询执行中使用。与列别名不一样，表别名不返回到客户机。</p><h4 id="不同类型的联结" tabindex="-1"><a class="header-anchor" href="#不同类型的联结" aria-hidden="true">#</a> 不同类型的联结</h4><p>我们使用的只是称为内部联结或等值联结（equijoin）的简单联结。现在来看3种其他联结，它们分别是自联结、自然联结和外部联结。</p>',9),r={},t=(0,n(3744).Z)(r,[["render",function(e,s){return a}]])},3744:(e,s)=>{s.Z=(e,s)=>{const n=e.__vccOpts||e;for(const[e,a]of s)n[e]=a;return n}}}]);