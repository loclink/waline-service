const createCommentTable = `
CREATE TABLE \`wl_Comment\` (
  \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
  \`user_id\` int(11) DEFAULT NULL,
  \`comment\` text,
  \`insertedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`ip\` varchar(100) DEFAULT '',
  \`link\` varchar(255) DEFAULT NULL,
  \`mail\` varchar(255) DEFAULT NULL,
  \`nick\` varchar(255) DEFAULT NULL,
  \`pid\` int(11) DEFAULT NULL,
  \`rid\` int(11) DEFAULT NULL,
  \`sticky\` boolean DEFAULT NULL,
  \`status\` varchar(50) NOT NULL DEFAULT '',
  \`like\` int(11) DEFAULT NULL,
  \`ua\` text,
  \`url\` varchar(255) DEFAULT NULL,
  \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

const createCounterTable = `
CREATE TABLE \`wl_Counter\` (
  \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
  \`time\` int(11) DEFAULT NULL,
  \`url\` varchar(255) NOT NULL DEFAULT '',
  \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

const createUsersTable = `
CREATE TABLE \`wl_Users\` (
  \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
  \`display_name\` varchar(255) NOT NULL DEFAULT '',
  \`email\` varchar(255) NOT NULL DEFAULT '',
  \`password\` varchar(255) NOT NULL DEFAULT '',
  \`type\` varchar(50) NOT NULL DEFAULT '',
  \`label\` varchar(255) DEFAULT NULL,
  \`url\` varchar(255) DEFAULT NULL,
  \`avatar\` varchar(255) DEFAULT NULL,
  \`github\` varchar(255) DEFAULT NULL,
  \`twitter\` varchar(255) DEFAULT NULL,
  \`facebook\` varchar(255) DEFAULT NULL,
  \`google\` varchar(255) DEFAULT NULL,
  \`weibo\` varchar(255) DEFAULT NULL,
  \`qq\` varchar(255) DEFAULT NULL,
  \`2fa\` varchar(32) DEFAULT NULL,
  \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

module.exports = {
  createCommentTable,
  createCounterTable,
  createUsersTable
};
