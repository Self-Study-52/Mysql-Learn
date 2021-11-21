"use strict";(self.webpackChunkMysql_Learn=self.webpackChunkMysql_Learn||[]).push([[114],{898:(e,a,l)=>{l.r(a),l.d(a,{data:()=>s});const s={key:"v-41c62278",path:"/guide/%E3%80%8A%E9%AB%98%E6%80%A7%E8%83%BDMysql%E3%80%8B/%E7%AC%AC%E4%BA%8C%E7%AB%A0%EF%BC%9A%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%80%A7%E8%83%BD%E5%88%A8%E6%9E%90.html",title:"第二章：服务器性能刨析",lang:"en-US",frontmatter:{title:"第二章：服务器性能刨析",lang:"en-US"},excerpt:"",headers:[{level:2,title:"2.1 简介",slug:"_2-1-简介",children:[]},{level:2,title:"2.2 剖析MySQL查询",slug:"_2-2-剖析mysql查询",children:[{level:3,title:"2.2.1 剖析单条查询",slug:"_2-2-1-剖析单条查询",children:[]}]}],filePathRelative:"guide/《高性能Mysql》/第二章：服务器性能刨析.md",git:{updatedTime:1637486257e3,contributors:[{name:"Sue-52",email:"1219243947@qq.com",commits:1}]}}},8260:(e,a,l)=>{l.r(a),l.d(a,{default:()=>r});const s=(0,l(6252).uE)('<h1 id="第二章-服务器性能刨析" tabindex="-1"><a class="header-anchor" href="#第二章-服务器性能刨析" aria-hidden="true">#</a> 第二章：服务器性能刨析</h1><p>最常碰到的三个性能相关的服务请求是：如何确认服务器是否达到了性能最佳的状态、找出某条语句为什么执行不够快，以及诊断被用户描述成“停顿”、“堆积”或者“卡死”的某些间歇性疑难故障。</p><h2 id="_2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-简介" aria-hidden="true">#</a> 2.1 简介</h2><p>性能的定义：完成某件任务所需要的时间度量，换句话说，性能即响应时间。我们通过任务和时间来定义性能，任务是指一个程序在某个时间点执行的操作，时间是指任务执行的时间。</p><p>数据库服务器的目的是执行SQL语句，所以它关注的任务是查询或者语句，如:<code>SELECT</code>、<code>UPDATE</code>、<code>DELETE</code>等。数据库服务器的性能用查询的响应时间来度量。</p><p>将大多数时间用来测量响应时间花费在哪里。如果测量了系统中完整且正确的数据，那么性能问题就会暴露出来。</p><p>有两种情况并不适合测量：</p><ul><li>在错误的时间启动和停止测量。</li><li>测量的是聚合后的信息，而不是目标活动本身。</li></ul><p>完成一项任务所需要的时间可以分成两部分：执行时间和等待时间。如果要优化任务的执行时间，最好的办法是通过测量定位不同的子任务花费的时间，然后优化去掉一些子任务、降低子任务的执行频率或者提升子任务的效率。而优化任务的等待时间则相对要复杂一些，因为等待有可能是由其他系统间接影响导致，任务之间也可能由于争用磁盘或者CPU资源而相互影响。根据时间是花在执行还是等待上的不同，诊断也需要不同的工具和技术。</p><h2 id="_2-2-剖析mysql查询" tabindex="-1"><a class="header-anchor" href="#_2-2-剖析mysql查询" aria-hidden="true">#</a> 2.2 剖析MySQL查询</h2><p>在服务器端可以有效地审计效率地下的拆线呢，定位和优化查询并提升应用性能。</p><h3 id="_2-2-1-剖析单条查询" tabindex="-1"><a class="header-anchor" href="#_2-2-1-剖析单条查询" aria-hidden="true">#</a> 2.2.1 剖析单条查询</h3><p>Mysql给我们提供了三种发用来剖析单挑查询。</p><p><strong>1. 使用 SHOW PROFILE</strong></p><p><code>SHOW PROFILE</code> 在<code>Mysql</code>5.1 的时候引入的。默认为禁用的，但是可以通过服务器变量在会话（连接）级别动态地修改。</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SET profiling = 1;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//image-20211110173114493.png" alt="image-20211110173114493"></p><p>然后，在服务器上执行的所有语句，都会测量其耗费的时间和其他一些查询执行状态变更相关的数据。这个功能有一定的作用，而且最初的设计功能更强大，但未来版本中可能会被Performance Schema所取代。尽管如此，这个工具最有用的作用还是在语句执行期间剖析服务器的具体工作。</p><p>当一条查询提交给服务器时，此工具会记录剖析信息到一张临时的表，并且给查询赋予一个从 1 开始的整数标识。</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',20),n={},r=(0,l(3744).Z)(n,[["render",function(e,a){return s}]])},3744:(e,a)=>{a.Z=(e,a)=>{const l=e.__vccOpts||e;for(const[e,s]of a)l[e]=s;return l}}}]);