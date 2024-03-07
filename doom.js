print('123 you are doomed');
Threads.sleep(2000);
Core.app.post(()=>{while(true){print('crash')};});
