"use strict";(self.webpackChunkMysql_Learn=self.webpackChunkMysql_Learn||[]).push([[871],{8938:(e,l,a)=>{a.r(l),a.d(l,{data:()=>i});const i={key:"v-0de86771",path:"/guide/%E3%80%8AMysql%E5%BF%85%E7%9F%A5%E5%BF%85%E4%BC%9A%E3%80%8B/%E7%AC%AC%E4%BA%8C%E5%8D%81%E4%B8%83%E7%AB%A0%EF%BC%9A%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BB%B4%E6%8A%A4.html",title:"第二十七章：数据库维护",lang:"en-US",frontmatter:{title:"第二十七章：数据库维护",lang:"en-US"},excerpt:"",headers:[{level:2,title:"备份数据",slug:"备份数据",children:[]},{level:2,title:"进行数据库维护",slug:"进行数据库维护",children:[]},{level:2,title:"诊断问题",slug:"诊断问题",children:[]},{level:2,title:"查看日志文件",slug:"查看日志文件",children:[]}],filePathRelative:"guide/《Mysql必知必会》/第二十七章：数据库维护.md",git:{updatedTime:1635847604e3,contributors:[{name:"Sue-52",email:"1219243947@qq.com",commits:1}]}}},8163:(e,l,a)=>{a.r(l),a.d(l,{default:()=>d});const i=(0,a(6252).uE)('<h1 id="第二十七章-数据库维护" tabindex="-1"><a class="header-anchor" href="#第二十七章-数据库维护" aria-hidden="true">#</a> 第二十七章：数据库维护</h1><h2 id="备份数据" tabindex="-1"><a class="header-anchor" href="#备份数据" aria-hidden="true">#</a> 备份数据</h2><p>像所有数据一样，Mysql 的数据也必须经常备份。Mysql的数据是基于磁盘的文件，普通的备份系统和例程就能备份备份Mysql数据。但是，由于这些文件总是处于打开和使用的状态，普通的文件副本备份不一定有效。</p><p>例如：</p><ul><li>使用命令行实用程序<code>mysqldump</code>转储所有数据库内容到某个外部文件。在进行常规备份前这个使用程序应该正常运行，以便能正常地备份转储文件。</li><li>可用命令行实用程序mysqlhotcopy从一个数据库复制所有数据（并非所有数据库引擎都支持这个实用程序）。</li><li>可以使用MySQL的BACKUP TABLE或SELECT INTO OUTFILE转储所有数据到某个外部文件。这两条语句都接受将要创建的系统文件名，此系统文件必须不存在，否则会出错。数据可以用RESTORETABLE来复原。</li></ul><blockquote><p>首先刷新未写数据：为了保证所有数据被写到磁盘（包括索引数据），可能需要在进行备份前使用FLUSH TABLES语句。</p></blockquote><h2 id="进行数据库维护" tabindex="-1"><a class="header-anchor" href="#进行数据库维护" aria-hidden="true">#</a> 进行数据库维护</h2><p>Mysql提供了可以确保数据库正确和正常运行的语句。</p><p><code>ANALYZE TABLE</code> 用来检查表键是否正确。</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ANALYZE TABLE orders;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202111021715461.png" alt="image-20211102171521426"></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CHECK TABLE orders;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202111021716739.png" alt="image-20211102171622717"></p><p><code>CHECK TABLE</code> 用来针对许多问题对表进行检查。在<code>MyISAM</code>表上还可以对索引进行检查。<code>CHECK TABLE</code> 支持一些列的用于<code>MyISAM</code>表的方式。<code>CHANGED</code>检查自最后一次检查以来改动过的表。<code>EXTENDED</code>执行最彻底的检查，<code>FAST</code>只检查为正常关闭的表，<code>MEDIUM</code>检查所有被删除的链接并进行键检验，<code>QUICK</code>只进行快速扫描。</p><ul><li>如果 MyISAM 表访问生产不确定和不一致的结果，可能需要REPAIR TABLE来修复相应的表。这条语句不应该经常使用，如果经常用会带来更大的问题。</li><li>如果从一个表中删除大量数据，应该使用 OPTIMIZE TABLE 来回收搜友的空间，从而优化表的性能</li></ul><h2 id="诊断问题" tabindex="-1"><a class="header-anchor" href="#诊断问题" aria-hidden="true">#</a> 诊断问题</h2><p>服务器启动问题通常在对MySQL配置或服务器本身进行更改时出现。MySQL在这个问题发生时报告错误，但由于多数MySQL服务器是作为系统进程或服务自动启动的，这些消息可能看不到。</p><p>在排除系统启动问题时，首先应该尽量用手动启动服务器。MySQL服务器自身通过在命令行上执行mysqld启动。下面是几个重要的mysqld命令行选项：</p><ul><li>--help显示帮助——一个选项列表；</li><li>--safe-mode装载减去某些最佳配置的服务器；</li><li>--verbose显示全文本消息（为获得更详细的帮助消息与--help 联合使用）；</li><li>--version显示版本信息然后退出。</li></ul><h2 id="查看日志文件" tabindex="-1"><a class="header-anchor" href="#查看日志文件" aria-hidden="true">#</a> 查看日志文件</h2><ul><li>错误日志。它包含启动和关闭问题以及任意关键错误的细节。此日志通常名为hostname.err，位于data目录中。此日志名可用--log-error命令行选项更改。</li><li>查询日志。它记录所有MySQL活动，在诊断问题时非常有用。此日志文件可能会很快地变得非常大，因此不应该长期使用它。此日志通常名为hostname.log，位于data目录中。此名字可以用--log命令行选项更改。</li><li>二进制日志。它记录更新过数据（或者可能更新过数据）的所有语句。此日志通常名为hostname-bin，位于data目录内。此名字可以用--log-bin命令行选项更改。注意，这个日志文件是MySQL5中添加的，以前的MySQL版本中使用的是更新日志。</li><li>缓慢查询日志。顾名思义，此日志记录执行缓慢的任何查询。这个日志在确定数据库何处需要优化很有用。此日志通常名为hostname-slow.log ，位于 data 目录中。此名字可以用--log-slow-queries命令行选项更改。</li></ul>',21),s={},d=(0,a(3744).Z)(s,[["render",function(e,l){return i}]])},3744:(e,l)=>{l.Z=(e,l)=>{const a=e.__vccOpts||e;for(const[e,i]of l)a[e]=i;return a}}}]);