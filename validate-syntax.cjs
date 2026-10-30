const fs=require('fs'),path=require('path');
const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript');
let count=0;let errs=[];
function walk(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,e.name);if(e.isDirectory())walk(f);else if(/\.(ts|tsx)$/.test(e.name)){count++;const x=ts.transpileModule(fs.readFileSync(f,'utf8'),{fileName:f,reportDiagnostics:true,compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX}});for(const d of x.diagnostics||[])if(d.category===ts.DiagnosticCategory.Error)errs.push(f+':'+ts.flattenDiagnosticMessageText(d.messageText,' '));}}}
walk(path.join(__dirname,'src'));
console.log('TS/TSX files parsed:',count);console.log('Errors:',errs.length,errs.join('\n'));process.exit(errs.length?1:0)
