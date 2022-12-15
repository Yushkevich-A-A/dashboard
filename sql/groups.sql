SELECT json_object('id', g1.id,
	'caption', g1.caption,
	'nodes', json_group_array(
			json_object(
				'id', node.id,
				'caption', node.caption,
				'status', json_object(
					'id', status_node.id,
					'color', status_node.color,
					'description', status_node.description
				),
				'interface', json_object(
					'id', interface.id,
					'caption', interface.caption,
					'status', json_object(
						'id', status_interface.id,
						'color', status_interface.color,
						'description', status_interface.description
					)
				),
				'admin', node.interface,
				'application', json_array(
							json_object(
								'id', app.id,
								'caption', app.caption
								)
						)
				)
		)
	) 
FROM (SELECT * FROM groups) as g1
join groups_nodes group_node, nodes node  on g1.id = group_node.group_id and node.id = group_node.node_id
join nodes_applications node_application, applications app on node.id = node_application.node_id and app.id = node_application.application_id
join interfaces interface on interface.id = node.interface
join statuses status_interface on status_interface.id = interface.status
join statuses status_node on status_node.id = node.status
GROUP BY g1.id