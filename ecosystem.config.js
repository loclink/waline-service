module.exports = {
  apps: [
    {
      name: 'waline-service', // 项目名称
      script: './src/main.js', // 执行入口
      cwd: './', // 工作路径
      watch: true, // 是否开启监听
      ignore_watch: ['logs', '.git', 'node_modules'], // 监听器忽略文件目录
      out_file: './logs/waline_info.log', // 日志输出路径
      error_file: './logs/waline_err.log', // 报错日志输出路径
      log_date_format: 'YYYY-MM-DD HH:mm', // 日志时间格式 会在每一行日志的前面加上该格式的时间戳
      merge_logs: true, // 合并日志文件名称
      restart_delay: 1000, // 崩溃重启服务时间间隔
      max_restarts: 3 // 崩溃后重启次数
    }
  ]
};
