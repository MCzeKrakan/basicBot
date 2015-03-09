Příkazy:
=========

X označuje číslo, 
argument mezi ( ) je volitelný


Manažer
-------

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!afklimit | X | nastaví max afk limit |
|!historyskiplimit | X | nastaví max limit pro přeskočení písní v historii (X=1-50) |
|!historyskip | | ON/OFF přeskočení písniček v hostorii |
|!clearchat | | smaže chat |
|!cycle | | ON/OFF DJ cyklus |
|!cycletimer | X | nastaví max čas, po který bude DJ cyklus zapnutý |
|!locktimer | X | nastaví max čas, po který bude DJ fronta zamčená |
|!refresh | | aktualizuje okno prohlížeče, na kterém běží Bot |
|!usercmdcd | X | nastaví cooldown pro příkazy šedých uživatelů |
|!usercommands | | ON/OFF příkazy pro uživatele |
|!voteskip | (X) | bez argumentu vypíše momentální limit meh, s argumentem nastaví nový limit meh. |

Vyhazovač+
--------

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!add | @user | přidá uživatele do fronty |
|!afkremoval | | ON/OFF AFK hlídač pro frontu |
|!autoskip | | automaticky přeskakuje songy po dohrání (když je buglý cyklus) |
|!bouncer+ | | ON/OFF vyhazovač+ |
|!deletechat | @user | odstraní veškeré zrávy kokrétního uživatele (**momentálně nefunkční, čeká na opravu**) |
|!lock | | uzamkne frontu |
|!lockdown | | uzamčení místnosti: pouze zaměstnanci mohou chatovat |
|!maxlength | X | max povolená délka songu (v sekundách) |
|!move | @user (X) | posune uživatele na pozici X, výchozí je 1 místo |
|!remove | @user | odstraní uživatele z fronty |
|!roulette | | spustí ruletu |
|!songstats | | ON/OFF statistiky písniček |
|!unlock | | odemkne frontu |
|!welcome | | ON/OFF uvítací zpráva |

Vyhazovač
-------

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!active | (X) | ukáže, kolik uživatelů chatovalo v posledních X minutách, výchozí je 60 minut |
|!afkreset | @user | resetuje AFK čas uživatele |
|!afktime | @user | ukáže, jak dlouho byl uživatel AFK |
|!autodisable | | ON/OFF každou hodinu pošle bot !afkdisable a !joindisable, to vypne automatické připojování a AFK zprávy pro PlugCubed |
|!ban | @user | zabanuje uživatele na 1 den |
|!blacklist / !bl | blacklist | přidá písničku do uvedeného blacklistu (BAN, OP) |
|!blinfo | | informace potřebné pro zadaní songu do blacklistu |
|!cycleguard | | ON/OFF časová ochrana zapnutého cyklu |
|!dclookup / !dc | (@user) | vyhledá poslední pozici odpojeného uživatele |
|!english | @user | požádá uživatele anglicky aby mluvil jazykem roomky CZ,SK,EN (v botovi není, časem dodělám) |
|!eta | (@user) | ukáže, kdy se přibližně uživatel dostane k pultu |
|!filter | | ON/OFF filtr chatu |
|!jointime | @user | ukáže, jak dlouho už je uživatel v roomce |
|!kick | (X) | kicks user for X minutes, default is 0.25 minutes (15 seconds) (nevyzkoušeno, pravděpodobně nefunkční) |
|!kill | | vypne Bota |
|!lockguard | | ON/OFF časová ochrana zamčené fronty |
|!lockskip | (důvod) | přeskočí píseň a posune dj zpět na první místo, důvody: <ul><li>theme - Song nevyhovuje aktuálnímu žánru této místnosti</li><li>op - Song je na seznamu příliš často hraných</li><li>history - Song je již v historii</li><li>sound - Song má velmi špatnou kvalitu zvuku, nebo žádný zvuk</li><li>nsfw - Song obsahuje nevhodný obsah (obrazový nebo zvukový)</li><li>un - Song nebyl dostupný pro všechny uživatele</li></ul> |
|!lockskippos | X | funguje jako lockskip, jen X nastaví pozici pro přesunutí |
|!motd | (X)/(zpráva) | bez argumentu vypíše momentální zprávu dne, když je zadáno X, vypíše zprávu každých X songů, když je zadána zpráva, nastaví novou zprávu dne. |
|!mute | @user (X) | ztlumí uživatele na 15 min (X=0-15), 30 min (X=16-30), 45 min (X=31-∞, nebo bez argumentu) |
|!reload | | restartuje Bota |
|!restricteta | | ON/OFF omezení příkazu eta pro šedé uživatele na jedenkrát za hodinu |
|!sessionstats | | zobrazí vaše statistiky od posledního připojení |
|!skip | | přeskočí současnou píseň |
|!status | | zobrazí momentální nastavení Bota |
|!timeguard | | ON/OFF přeskakování dlouhých songů |
|!togglebl | | ON/OFF přeskočení blacklistu |
|!togglemotd | | ON/OFF zpráva dne |
|!togglevoteskip | | ON/OFF peskočení pro počet Meh |
|!unban | @user | odbanovat uživatele |
|!unmute | | zrušit umlčení uživatele |
|!voteratio | @user | zobrazi statistiku hlasování pro uživatele |

Rezidentní DJ
-----------

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!link | | zobrazí yt odkaz pro současný song



Uživatel
----

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!autowoot | | odkaz na RCS, doporučený script/doplněk nejen pro autowoot |
|!ba | | vysvětlení Brand Ambassador hodnosti |
|!commands | | odkaz na tento seznam příazů |
|!gift | (@user) | pošle dárek uživateli |
|!cookie | (@user) | give a cookie to user (nefunkční, vypnuto) |
|!dclookup / !dc | | vyhlednání svojí poslední pozice a připojení do fronty  |
|!emoji | | odkaz na seznam emotikonů |
|!eta | | ukáže, za jak dlouho se dostaneš k pultu |
|!fb | | odkaz na náš facebook |
|!help | | odkaz na obrázek, který pomůže novým lidem se zorientovat na plugu |
|!join | | připojit se k ruletě, pokud je puštěna |
|!leave | | opustit ruletu, pokud jsi připojen |
|!link | | když je uživatel DJ, zobrazí odkaz na na současnou píseň |
|!op | | odkaz na OP list (pokud je nastaven) |
|!ping | | pong! |
|!rules | | odkaz na pravidla (pokud je nastaven) |
|!theme | | odkaz na temá, zaměření místnosti (pokud je nastaven) |
|!website | | odkaz na stránky (pokud je nastaven) |
|!youtube | | odkaz na youtube kanál (pokud je nastaven) |
|!stream | | odkaz na twitch stream (pokud je nastaven) |
