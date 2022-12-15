SELECT g1.*, json_group_array(
			json_object(
				'id', node.id,
				'caption', node.caption,
				'status_node', json_object(
					'id', status_node.id,
					'color', status_node.color,
					'description', status_node.description
				),
				'interface', json_object(
					'id', interface.id,
					'caption', interface.caption,
					'status_interface', json_object(
						'id', status_interface.id,
						'color', status_interface.color,
						'description', status_interface.description
					)
				),
				'admin', json_object(
					'id', user.id,
					'firstname', user.firstName,
					'lastname', user.lastName,
					'email', user.email
					),
				'application', json_array(
							json_object(
								'id', app.id,
								'caption', app.caption
								)
						)
				)
		) as 'nodes'
FROM groups g1
join groups_nodes group_node, nodes node  on g1.id = group_node.group_id and node.id = group_node.node_id
left JOIN nodes_applications node_application, applications app on node.id = node_application.node_id and app.id = node_application.application_id
left JOIN users user on node.admin = user.id
left JOIN interfaces interface on interface.id = node.interface
left JOIN statuses status_interface on status_interface.id = interface.status
left JOIN statuses status_node on status_node.id = node.status
GROUP BY g1.id